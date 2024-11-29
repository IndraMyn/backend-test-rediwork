const request = require('supertest');
const app = require('../app');
const { Employer } = require('../models');
const { generateTestToken } = require('./utils');

let employerId;
let authToken;

beforeAll(async () => {
  // Seed data untuk testing
  const employer = await Employer.create({
    employee_id: '1',
    name: 'Indra Mulyawan',
    job_title: 'Fullstack Developer',
    salary: 10000000,
    department: 'IT',
    joined_date: '2024-12-12',
  });
  employerId = employer.id;

  // Generate token JWT untuk testing
  authToken = generateTestToken();
});

afterAll(async () => {
  await Employer.destroy({ where: {}, truncate: true });
});

describe('Employer API with JWT', () => {
  it('GET /api/employers - should return all employers', async () => {
    const res = await request(app)
      .get('/api/employers')
      .set('Authorization', `Bearer ${authToken}`); // Tambahkan header Authorization
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/employers/:id - should return an employer by ID', async () => {
    const res = await request(app)
      .get(`/api/employers/${employerId}`)
      .set('Authorization', `Bearer ${authToken}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', employerId);
  });

  it('POST /api/employers - should create a new employer', async () => {
    const newEmployer = {
      employee_id: 'E124',
      name: 'Jane Smith',
      job_title: 'Product Manager',
      salary: 85000,
      department: 'Product',
      joined_date: '2021-07-15',
    };

    const res = await request(app)
      .post('/api/employers')
      .set('Authorization', `Bearer ${authToken}`)
      .send(newEmployer);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('DELETE /api/employers/:id - should delete an employer', async () => {
    const res = await request(app)
      .delete(`/api/employers/${employerId}`)
      .set('Authorization', `Bearer ${authToken}`);
    expect(res.statusCode).toBe(200);
  });

  it('GET /api/employers - should return 401 without token', async () => {
    const res = await request(app).get('/api/employers');
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('message', 'Unauthorized');
  });
});
