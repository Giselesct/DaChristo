//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '1m', target: 10 },
    { duration: '5s', target: 0 },
  ],
};

//função para inserir Categorias
export default function () {
  const url = 'https://localhost:7296/Subcategoria';
  const payload = JSON.stringify({
    
        "id": "3fa85f64-5717-4562-b3fc-1c963f66afa6",
        "nome": "Para Rico",
        "status": true,
        "dataEHoraCriacao": "2023-07-26T19:55:59.505Z",
        "categoriaId": "d948cd8c-0b2c-4c19-9453-9aa0efa643fb"
      
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}