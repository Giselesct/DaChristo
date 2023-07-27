//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '1m', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

//função para inserir Categorias
export default function () {
  const url = 'https://localhost:7296/Categoria';
  const payload = JSON.stringify({
    "id": "d948cd8c-0b2c-4c19-9453-9aa0efa643fb",
    "nome": "Criativa",
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


