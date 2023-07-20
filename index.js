'use strict';

require('dotenv').config();
const { sequelize } = require('./src/auth/models');
const server = require('./src/server');

// make sure our tables are created, start up the HTTP server.
sequelize
  .sync()
  .then(() => {
    server.listen(3000, () => console.log('Running server'));
  })
  .catch((e) => {
    console.error('Could not start server', e.message);
  });
