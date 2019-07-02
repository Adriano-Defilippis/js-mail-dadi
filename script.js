// Chiedi la mail all'utente
var mail;

mail = prompt('inserisci la tua mail')


// Check mail list
var mioarray = ["luca.luca@gmail.com", "paolo.paolo@hotmail.com", "nicola@gmail.it", "francesco@aruba.it" , "andrea.andrea@tiscali.it", "mario.luca@yahoo.com", "gildo@gmail.com"];



// Controllo nell'Array se la mail inserita dall'utente è presente
for (i = 0; i < mioarray.length; i++){
  if (mail===mioarray[i]){
    alert('Benvenuto');
    console.log(mioarray[i]);
  }
  else{
    alert('accesso negato per questo utente');
    console.log(mioarray[i]);
  }
}
