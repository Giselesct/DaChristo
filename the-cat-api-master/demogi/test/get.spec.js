// test.js
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
  await spec()
    .get('https://api.thecatapi.com/v1/images/search?limit=10')
    .expectStatus(200);
});


it('should get a response with status code 200', async () => {
  await spec()
    .get('https://api.thecatapi.com/v1/images/search')
    .expectStatus(200);
});