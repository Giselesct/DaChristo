//rodei o codigo com esta função colocando usuarios

import http from 'k6/http';



//função para inserir Categorias
export default function () {
  const url ='https://localhost:7161/Categoria';
  
  const payload = JSON.stringify({
    
  "nome": 'Damari',
  "status": true,
  "dataCriacao": '2023-07-31T00:52:28.834Z'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
