'use strict';

describe('get', () => {
  it('GET route', async () => {
      const response = await request.get(url);
      expect(response).toHaveProperty('status', 200);
      expect(typeof response.body).toEqual('object');
    });
  });