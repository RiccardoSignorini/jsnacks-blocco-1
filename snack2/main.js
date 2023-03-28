/*
--PROBLEMA--
L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga
*/

let parola1 = prompt(`Scrivi una parola`);

let parola2 = prompt(`Scrivi un'altra parola`);

if(parola1.length > parola2.length){
    document.writeln(`<p>${parola2} è più corta di ${parola1}</p>`);
}else if(parola1.length < parola2.length){
    document.writeln(`<p>${parola1} è più corta di ${parola2}</p>`);
}else{
    document.writeln(`<p>${parola1} è della stessa lunghezza di ${parola2}</p>`);
}