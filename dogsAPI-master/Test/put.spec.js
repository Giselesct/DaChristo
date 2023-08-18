// test.js
const { spec } = require('pactum');

it('should put a response with status code 401', async () => {
  await spec()
    .put('https://api.thecatapi.com/v1/images/search?limit=10')
    .expectStatus(401);
});
