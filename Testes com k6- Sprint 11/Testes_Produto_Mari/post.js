//não  rodei o codigo com esta função falta corrigir este codigo

import http from 'k6/http';

export const options = {
  stages: [
   { duration: '10s', target: 20 },
    { duration: '1m', target: 10 },
    { duration: '5s', target: 0 },
  ],
};

//função para inserir Produtos
export default function () {
  const url =  'https://localhost:7161/Produto';
  const payload = JSON.stringify({
    
    "id": "46",
    "nome": "Blusinha da Gi",
    "descricao": "Pequena",
    "peso": 27.0,
    "altura": 34.0,
    "largura": 35.0,
    "comprimento": 90.9,
    "valor": 40,
    "quantidadeEmEstoque": 50,
    "centroDeDistribuicaoId": "c95c8a40-7a73-4a09-9e07-b95875285471",
    "status": true,
    "dataEHoraCriacao": "2023-07-27T01:48:55.820Z",
    "subcategoriaId": "7bdcb488-342c-4c54-a989-2a4218955303"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}