var cognome = prompt("Scrivi il tuo cognome!");

var lista = ["rossi","bianchi","martini","verdi","matranga"];

var fuori;

var fuori = lista.includes(cognome);
 
if (fuori != lista){
    lista.push(cognome);
    lista.sort();
    console.log(lista.indexOf(cognome)+1);
}
 console.log (lista);
 
