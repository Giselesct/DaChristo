//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '1s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '5s', target: 0 },
  ],
};

//função para inserir ct
export default function () {
  const url = ('https://localhost:7296/CentroDeDistribuicao');
  
  const payload = JSON.stringify({
    "nome": "Gigialeluia",
    "complemento": "pertomarçalo",
    "cep": "06132290",
    "numero": 26,

  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      
    },
  };

  http.post(url, payload, params);

  
}


