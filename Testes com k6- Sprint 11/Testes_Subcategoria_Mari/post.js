//ja  rodei o codigo com esta função colocando usuarios e esta ok

import http from 'k6/http';

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '1s', target: 5 },
    { duration: '5s', target: 0 },
  ],
};
//função para inserir Categorias
export default function () {
    const url = 'https://localhost:7161/SubCategoria';
    const payload = JSON.stringify({
      
          "nome": "Para Rico ne mari",
          "status": true,
          "dataEHoraCriacao": "2023-07-26T19:55:59.505Z",
          "categoriaId": "22"
        
    });
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    http.post(url, payload, params);
  }