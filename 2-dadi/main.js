// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// step logici
// generiamo un numero casuale per il giocatore e uno per il computer tramite 2 variabili e Math.floor e random
// mostriamo i punteggi con i log
// determiniamo il vincitore con un if

let Giocatore = Math.floor(Math.random() * 6) + 1;
let Computer = Math.floor(Math.random() * 6) + 1;
