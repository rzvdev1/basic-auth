'use strict';

const server = require('../middleware/404.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('page not found', () => {
  test(
    'should be page not found with status 404',
    async () => {
      const response = await mockRequest.get('/pageNot');
      expect(response.status).toBe(404);
      expect(response.text).toBe('No such route!');
    },
    { timeout: 10000 }
  );
});
