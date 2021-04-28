var cognome = prompt("Scrivi il tuo cognome!");

var lista = ["rossi","bianchi","martini","verdi","matranga"];

for (i = 1; i < lista.length; i++){
    
    if (cognome != lista){
        var total = lista.push("vale");
        console.log(lista);  
    }
}
