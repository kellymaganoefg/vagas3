// Cole aqui a URL gerada pelo Apps Script (Implantar > Aplicativo da Web)
const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzt_7-sIdyAFKembSFs0IoGjAxvc3HKwKvlGBnWKtb6kR-RfxANmjpvZmRVLk1Avu6tWw/exec";
 
const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
 
form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede a página de recarregar
 
  aviso.textContent = "Enviando...";
 
  // fetch envia os dados para o Apps Script
  fetch(URL_PLANILHA, {
    method: "POST",
    mode: "no-cors",
    body: new FormData(form) // pega todos os campos
  })
    .then(function () {
      aviso.textContent = "Enviado com sucesso!";
      form.reset(); // limpa os campos
    })
    .catch(function () {
      aviso.textContent = "Erro ao enviar. Tente de novo.";
    });
});
