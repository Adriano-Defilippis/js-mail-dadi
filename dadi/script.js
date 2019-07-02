// creo la funzine per il lancio dei dadi
function lancioDadoUtente() {
   var dadonum, dadocpu, esito;

   // Genero un numero random da 1 a 6 per l'utente
   dadoutente = Math.floor((Math.random() * 6)+ 1);
   // Genero un numero random da 1 a 6 per la cpu
   dadocpu = Math.floor((Math.random() * 6)+ 1);
   console.log(dadocpu);
   // Valorizzo la variabile esito della sfida
   esito = document.getElementById('esito');

   // Stampo i numeri random a video
   document.getElementById('risultato_utente').innerHTML = "il numero uscito per l'utente é: " + dadoutente;

   document.getElementById('risultato_cpu').innerHTML = "il numero uscito per la cpu è: " + dadocpu;

   //controllo vincitore
   if (dadoutente > dadocpu){
     esito.innerHTML = "hai vinto!"

   }
   else if (dadoutente == dadocpu) {
     esito.innerHTML = "Parità!"

   }
   else{
     esito.innerHTML = "non hai vinto!"
   }

}

var button;
button = document.getElementById('button');

// Azione onclick sul button
button.onclick = lancioDadoUtente;
