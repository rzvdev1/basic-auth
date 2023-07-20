'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { it } = require('node:test');
const mockRequest = supertest(server);

describe('server running', () => {
  it('should respond with a 404 on a bad route', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);
  });
});
