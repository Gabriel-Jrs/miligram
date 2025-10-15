// Simula o envio do formulário e exibe uma mensagem
document.getElementById("contato").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensagem-enviada").classList.remove("hidden");
  this.reset();
});
