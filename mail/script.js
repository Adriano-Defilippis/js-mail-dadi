// Chiedi la mail all'utente
var mail;

mail = prompt('inserisci la tua mail');


// Check mail list
var mioarray = ["luca.luca@gmail.com", "paolo.paolo@hotmail.com", "nicola@gmail.it", "francesco@aruba.it" , "andrea.andrea@tiscali.it", "mario.luca@yahoo.com", "gildo@gmail.com"];

// Variabile booleana
var trovato = false;




// Controllo nell'Array se la mail inserita dall'utente è presente
// for (i = 0; i < mioarray.length; i++){
//  var controllo = false;
//
//   if (mioarray.includes(mail)){
//     alert('welcome');
//     console.log(mail);
//     controllo = true;
//     break;
//   }
//   else  (!(mioarray.includes(mail))){
//   console.log('accesso negato');
//   controllo = false;
//   break;
//   }
//
// }



for (var i = 0; i < mioarray.length; i++){

  if (mail == mioarray[i]){
    trovato = true;
  }

}

//Controllo della variabile Boolena, se true : trovato, se false: non trovato
if (trovato) {
  alert('welcome');
  console.log('loggato');
}
else{
  alert('Non sei loggato');
  console.log('non sei loggato');
}
