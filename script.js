//Creiamo un password personalizzata per l'utente


//ACQUISIZIONE E PREPARAZIONE DEI DATI
// Chiediamo all'utente il suo nome.
const userName = prompt('Ciao, inserisci il tuo nome');
console.log(userName);
// Chiediamo all'utente il suo cognome.
const userSurname = prompt('Ciao, inserisci il tuo cognome');
console.log(userSurname);
// Chiediamo all'utente il suo colore preferito.
const userFavColor = prompt('Ciao, inserisci il tuo colore preferito');
console.log(userFavColor);

// LOGICA DELLA MIA APPLICAZIONE
// Nome+Cognome+ColorePreferito+23 (NON E' UNA SOMMA DI VALORI NUMERICI)
let userMessage = `La tua password è ${userName}${userSurname}${userFavColor}23`;

// OUTPUT ALL'UTENTE
document.getElementById('message').innerHTML = userMessage;
console.log(userMessage);
