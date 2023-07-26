//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';
//import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '10s', target: 0 },
  ],
};



export default function () {
  const url = 'https://localhost:7296/Categoria';
  const payload = JSON.stringify({
    "id": "9e1f6d4f-46fc-410c-90a0-863ea20a74a9",
    "nome": "Roupa bugada",
    "status": true,
    "criacao": "25/07/2023 19:16:37",
    "modificacao": "Não houve modificações."
  
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
