// CREAZIONE DELL'ARRAY VUOTO
let arrayDispari = [];

// CREAZIONE DEL PROMPT PER L'UTENTE
for (let i = 0; i < 6; i++) {
  let numero = parseInt(prompt("Inserisci un numero:"));

  //VRIFICA SE IL NUMERO INSERITO E' DISPARI
  if (numero % 2 !== 0) {
    // INSERISCO IL NUMERO NELL'ARRAY SE E' DISPARI
    arrayDispari.push(numero);
    console.log("Numero dispari aggiunto: " + numero);
  } else {
    console.log("Il numero è dispari");
  }
}
