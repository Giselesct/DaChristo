import http from 'k6/http';

export default function () {
  const url = 'https://localhost:7161/Categoria/31';
  const payload = JSON.stringify({
    "nome": "Roupamari",
    "status": true,
    "criacao": "25/07/2023 19:16:37"
    
  
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.put(url, payload, params);
}
