document.addEventListener("DOMContentLoaded", () => {
  const formContato = document.querySelector(".form-contato");
  const mensagemEnviada = document.querySelector(".mensagem-enviada");

  if (formContato && mensagemEnviada) {
    formContato.addEventListener("submit", (event) => {
      event.preventDefault();
      mensagemEnviada.classList.remove("hidden");
      mensagemEnviada.textContent = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
      formContato.reset();
    });
  }
});
