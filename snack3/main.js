/*
--PROBLEMA--
Il software deve chiedere per 10 volte all'utente di inserire un numero. Il programma stampa la somma di tutti i numeri
*/
let somma = 0;

for(let n = 0; n < 10; n++){
    let numero = parseInt(prompt(`Scrivi un numero`));

    somma = somma + numero;
}

document.writeln(`<p>la somma dei tuoi numeri è ${somma}</p>`);