// test.js
const { spec } = require('pactum');

it('not should delete a response with status code 401', async () => {
  await spec()
    .delete('https://api.thecatapi.com/v1/images/search?limit=10')
    .expectStatus(401);
});
