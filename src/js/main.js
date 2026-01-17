const piada = document.getElementById("piada");

const fetchData = async () => { // função para buscar a piada na API
  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/piadas");
  const data = await res.json(); // converte a resposta para JSON
  piada.innerText = data.piada; // exibe a piada na tela
}

window.fetchData = fetchData; // torna a função fetchData acessível globalmente
