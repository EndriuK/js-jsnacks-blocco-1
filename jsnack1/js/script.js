// DEFINISCO L'ARRAY DI NOMI SU QUALE ANDARE AD EFFETURE IL CONTROLLO
let nomi = ["pippo", "paperino", "pluto"];

// RECUPERO IL PULSANTE DAL DOM
const btn = document.getElementById("check");

// AGGIUNGO L'EVENTO CLICK AL PULSANTE
btn.addEventListener("click", function () {
  // RECUPERO IL VALORE DEL NOME DA INSERIRE
  let userName = document.getElementById("nomi").value;

  // DEFINISCO UNA VARIABILE FLAG PER IL CONTROLLO DEL NOME
  let controllo = false;

  for (let i = 0; i < nomi.length; i++) {
    // CONTROLLO SE IL NOME INSERITO E' PRESENTE NELL'ARRAY
    if (userName == nomi[i]) {
      controllo = true;
    }
  }

  if (controllo) {
    console.log("il nome inserito e' presente nella lista");
  } else {
    console.log("il nome inserito non e' presente nella lista");
  }
});
