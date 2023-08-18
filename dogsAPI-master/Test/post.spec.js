// test.js
const { spec } = require('pactum');

it('should post a response with status code 401', async () => {
  await spec()
    .post('https://api.thecatapi.com/v1/images/search?limit=10')
    .expectStatus(401);
});