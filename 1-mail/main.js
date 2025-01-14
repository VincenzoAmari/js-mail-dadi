// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email

// step
// creare l Array lista invitati con vari esempi di mail
// creare un prompt dove facciamo inserire la mail
// creiamo una variabile di verifica per vedere se la mail è presente nella lista
// cilco for per controllare se la mail è presente
// se presente messaggio di presenza
// altrimenti messaggio di rifiuto

const listaInvitati = [
  "es1@gmail.com",
  "es2@gmail.com",
  "es3@gmail.com",
  "es4@gmail.com",
  "es5@gmail.com",
  "es6@gmail.com",
  "es7@gmail.com",
];

const tuaMail = prompt("inserisci la tua mail");

let verificaInvito = false;
for (let i = 0; i < listaInvitati.length; i++) {
  if (listaInvitati[i] === tuaMail) {
    verificaInvito = true;
  }
}
