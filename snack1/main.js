/* 
--PROBLEMA--
L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let number1 = prompt(`Scrivi un numero`);

let number2 = prompt(`Scrivi un'altro numero`);

if(number1>number2){
    document.writeln(`<p>${number1} è maggiore di ${number2}</p>`);
} else if(number1<number2){
    document.writeln(`<p>${number2} è maggiore di ${number1}</p>`);
} else{
    document.writeln(`<p>${number1} è uguale a ${number2}</p>`);
}