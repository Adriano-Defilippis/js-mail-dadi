// creo la funzine per il lancio dei dadi
function lancioDadoUtente() {
   var dadonum, risultato;

   // Genero un numero random da 1 a 6
   dadonum = Math.floor((Math.random() * 6)+ 1);
   console.log(dadonum);

   risultato = document.getElementById('risultato_utente');
   risultato.innerHTML = "il numero uscito per l'utente é: " + dadonum;
   console.log(dadonum);

}

var button = document.getElementById('button');

button.onclick = lancioDadoUtente;
