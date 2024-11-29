const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/employers', routes);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
