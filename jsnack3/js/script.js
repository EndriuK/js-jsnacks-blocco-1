// Chiede un numero di 4 cifre all'utente
let numero = prompt("Inserisci un numero di 4 cifre:");

// Divide il numero in singole cifre usando split
let cifre = numero.split("");

// Calcola la somma delle cifre
let somma = 0;
for (let i = 0; i < cifre.length; i++) {
  somma += parseInt(cifre[i]);
}

// Stampa la somma delle cifre
console.log("La somma delle cifre del numero " + numero + " è: " + somma);
