// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// step logici
// generiamo un numero casuale per il giocatore e uno per il computer tramite 2 variabili e Math.floor e random
// mostriamo i punteggi con i log
// determiniamo il vincitore con un if

let Giocatore = Math.floor(Math.random() * 6) + 1;
let Computer = Math.floor(Math.random() * 6) + 1;

console.log("Punteggio del Giocatore: " + Giocatore);
console.log("Punteggio del Computer: " + Computer);

if (Giocatore > Computer) {
  console.log("L uomo vince e distrugge il pc con la tastiera!");
} else if (Giocatore < Computer) {
  console.log(
    "Il Computer vince e inserisce un USB gigante (con il verso sbagliato) dentro l uomo!"
  );
} else {
  console.log("È un pareggio e non succede nulla, mi spiace!");
}

//perfetto funziona
