// CHIEDO NUMERO DI 4 CIFRE
let numero = prompt("Inserisci un numero di 4 cifre:");

// DIVIDO IL NUMERO CON SPLIT
let cifre = numero.split("");

// CALCOLO LA SOMMA DELLE CIFRE
let somma = 0;
for (let i = 0; i < cifre.length; i++) {
  somma += parseInt(cifre[i]);
}
