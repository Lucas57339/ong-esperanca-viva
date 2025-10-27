
console.log("JavaScript funcionando!");


const form = document.querySelector("form");
const nome = document.querySelector('input[name="nome"]');
const email = document.querySelector('input[name="email"]');
const tipo = document.querySelector('select[name="tipo"]');
const mensagem = document.querySelector('textarea[name="mensagem"]');

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  let erros = [];

  if (nome.value.trim() === "") {
    erros.push("O campo Nome completo é obrigatório.");
  }

  if (email.value.trim() === "") {
    erros.push("O campo E-mail é obrigatório.");
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    erros.push("Digite um e-mail válido.");
  }

  if (tipo.value === "" || tipo.value === "selecione") {
    erros.push("Selecione como deseja participar.");
  }

  const mensagemErro = document.getElementById("mensagem-erro");
  const mensagemSucesso = document.getElementById("mensagem-sucesso");

  mensagemErro.textContent = "";
  mensagemSucesso.textContent = "";

  if (erros.length > 0) {
    mensagemErro.innerHTML = erros.join("<br>");
    mensagemErro.style.display = "block";
    mensagemSucesso.style.display = "none";
  } else {
    mensagemSucesso.textContent = "Cadastro enviado com sucesso!";
    mensagemSucesso.style.display = "block";
    mensagemErro.style.display = "none";

    const dados = {
      nome: nome.value,
      email: email.value,
      tipo: tipo.value,
      mensagem: mensagem.value,
    };
    localStorage.setItem("cadastro", JSON.stringify(dados));

    form.reset();
  }
});
