'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

describe('routes', () => {
  test('bad respond with a 404 on a bad method', async () => {
    const response = await mockRequest.patch('/error');
    expect(response.status).toBe(404);
  });
});
