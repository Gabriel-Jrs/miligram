document.addEventListener("DOMContentLoaded", () => {
  const formContato = document.querySelector(".form-contato");
  const mensagemEnviada = document.querySelector(".mensagem-enviada");


  if (mensagemEnviada) {
    mensagemEnviada.classList.add("hidden");
  }

  if (formContato && mensagemEnviada) {
    formContato.addEventListener("submit", (event) => {
      event.preventDefault();


      mensagemEnviada.textContent =
        "Mensagem enviada com sucesso! Entraremos em contato em breve.";
      mensagemEnviada.classList.remove("hidden");


      formContato.reset();


      setTimeout(() => {
        mensagemEnviada.classList.add("hidden");
      }, 4000);
    });
  }
});
