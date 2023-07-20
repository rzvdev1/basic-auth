'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const basic = require('./auth/middleware/basic');
const pageNotFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

const { Users } = require('./auth/models');

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) {
    res.status(403).send('Error Creating User');
  }
});

server.post('/signin', basic, (req, res) => {
  res.status(200).send(req.user);
});
server.use('*', pageNotFoundHandler);
server.use(errorHandler);

module.exports = server;
