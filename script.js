// Chiedi la mail all'utente
var mail;

mail = prompt('inserisci la tua mail');


// Check mail list
var mioarray = ["luca.luca@gmail.com", "paolo.paolo@hotmail.com", "nicola@gmail.it", "francesco@aruba.it" , "andrea.andrea@tiscali.it", "mario.luca@yahoo.com", "gildo@gmail.com"];



// Controllo nell'Array se la mail inserita dall'utente è presente
for (i = 0; i < mioarray.length; i++){

  if (mioarray[i] == mail){
    alert('Benvenuto');
    console.log(mail);
  }



}


// for (i = 0; i < mioarray.length; i++){
//   if (mioarray[i] === mail){
//     // alert('accesso negato per questo utente');
//     alert('welcome');
//     console.log('wellcome');
//   }
//
//   else{
//     alert('accesso negato');
//     console.log('accesso negato');
//
//     break;
//   }
//
// }
