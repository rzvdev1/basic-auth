'use strict';

const server = require('../middleware/404.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('page not found', () => {
  // test('bad respond with a 404 on a bad method', async () => {
  //   const response = await mockRequest.patch('/pageNot');
  //   expect(response.status).toBe(404);
  // });
  test('should be page not found with staus 404', async () => {
    const response = await mockRequest.get('/pageNot');
    expect(response.status).toBe(404);
  });
});
