// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
// e l’età del passeggero.
// Sulla base di queste informazioni dovrà:
// calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// VARIABILI GENERALI

var prezzoBase;
var prezzoAnziani;
var prezzoMinorenni;

// CHIEDERE KM
var kilometri = parseInt(prompt("Inserisci i chilometri che devi percorrere"));

// CHIEDERE ETA
var eta = prompt("Inserisci la tua età");

// CALCOLARE PREZZO STANDARD
prezzoBase = (kilometri * 0.21);

// ASSEGNARE EVENTUALE SCONTO MINORENNI
if (eta < 18) {
prezzoMinorenni = (prezzoBase / 100*80).toFixed(2);
document.getElementById('ticket-price').innerHTML = "€ " + prezzoMinorenni;
document.getElementById('discount').innerHTML = "Sconto -20% minorenni effettuato";
}
//  ASSEGNARE EVENTUALE SCONTO ANZIANI
else if (eta > 65) {
  prezzoAnziani = (prezzoBase / 100*60).toFixed(2);
  document.getElementById('ticket-price').innerHTML = "€ " + prezzoAnziani;
  document.getElementById('discount').innerHTML = "Sconto -40% anziani effettuato";
}
else {
  document.getElementById('ticket-price').innerHTML = "€ " + prezzoBase;
}
