/*
--PROBLEMA--
Crea un array vuoto. Chiedi per 6 volte all'utente un numero, se è dispari inseriscilo nell'array.
*/
let numeriDispari = [];

for(let n = 0; n < 6; n++){
    let numero = parseInt(prompt(`Scrivi un numero`));

    if(numero % 2 != 0){
        numeriDispari.push(numero)
    }
}

document.writeln(`<p>I numeri dispari sono ${numeriDispari}</p>`);