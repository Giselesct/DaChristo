import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7296/Categoria/67683d0c-0cd1-4962-8056-26f84026446a';
  const payload = JSON.stringify({
    "id": "67683d0c-0cd1-4962-8056-26f84026446a",
    "nome": "Roupatop que gosto",
    "status": true,
    "criacao": "25/07/2023 19:16:37",
    "modificacao": "Não houve modificações."
  
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.put(url, payload, params);
}
