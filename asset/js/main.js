var cognome = prompt("Scrivi il tuo cognome!");

var lista = ["rossi","bianchi","martini","verdi","matranga"];

 
for (i = 1; i < lista.length; i++){
    
    if (cognome != lista[i]){
        lista.push(cognome);
        console.log(lista);
        
    }
}

 
