
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    const ativo = menu.classList.contains("ativo");
    menuToggle.setAttribute("aria-expanded", ativo);
  });
}


const toggleDark = document.getElementById("toggleDark");
if (toggleDark) {
  toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    localStorage.setItem(
      "modoEscuro",
      document.body.classList.contains("modo-escuro")
    );
  });

  if (localStorage.getItem("modoEscuro") === "true") {
    document.body.classList.add("modo-escuro");
  }
}
const form = document.getElementById("cadastro-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const participacao = document.getElementById("participacao").value;
    const mensagemErro = document.getElementById("mensagem-erro");
    const mensagemSucesso = document.getElementById("mensagem-sucesso");

  
    mensagemErro.style.display = "none";
    mensagemSucesso.style.display = "none";

    if (!nome || !email || !participacao) {
      mensagemErro.textContent = "⚠️ Por favor, preencha todos os campos obrigatórios.";
      mensagemErro.style.display = "block";
      return;
    }

    mensagemSucesso.textContent = "✅ Cadastro enviado com sucesso! Obrigado por participar da ONG Esperança Viva.";
    mensagemSucesso.style.display = "block";

   
    setTimeout(() => {
      form.reset();
      mensagemSucesso.style.display = "none";
    }, 2500);
  });
}
