const piada = document.getElementById("piada");

const fetchData = async () => { // função para buscar a piada na API
  const res = await fetch("http://localhost:3000/piadas"); // faz a requisição para a API
  const data = await res.json(); // converte a resposta para JSON
  piada.innerText = data.piada; // exibe a piada na tela
}

window.fetchData = fetchData; // torna a função fetchData acessível globalmente
