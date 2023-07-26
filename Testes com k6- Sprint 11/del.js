import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7296/Categoria/3fa85f64-5717-4562-b3fc-2c963f66afa6';
  const payload = JSON.stringify({
    "id": "67683d0c-0cd1-4962-8056-26f84026446a",
    "nome": "Roupatop",
    "status": true,
    "criacao": "25/07/2023 19:16:37",
    "modificacao": "Não houve modificações."
  
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.del(url, payload, params);
}
