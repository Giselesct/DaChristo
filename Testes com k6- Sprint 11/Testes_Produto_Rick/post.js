//não  rodei o codigo com esta função falta corrigir este codigo

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
  const url = 'https://localhost:7296/Produto';
  const payload = JSON.stringify({
    
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa7",
    "nome": "Blusinha da gi",
    "descricao":"Pequena",
    "peso": 27,
    "altura": 34,
    "largura": 35,
    "comprimento": 90,
    "valor": 40,
    "quantidadeEmEstoque": 50,
    "centroDeDistribuicaoId": "3fa85f64-5717-4562-b3fc-2c963f66afa2",
    "status": true,
    "dataEHoraCriacao": "2023-07-27T01:48:55.820Z",
    "subcategoriaId": "08db726f-9ce0-4542-8aaa-6d3e8e8a08ad"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}