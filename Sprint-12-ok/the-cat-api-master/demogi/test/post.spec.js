// test.js
const { spec } = require('pactum');

it('should get a response with status code ', async () => {
  await spec()
    .post('https://api.thecatapi.com/v1/images/search?limit=10')
    .expectStatus(401);
});
