// input 
let choice = prompt("Scegli tra pari e dispari")
let n = parseInt(prompt("Scegli un numero tra 1 e 5"))

// numero random
function rundomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// console.log(rundomNumber(1, 5));

// somma 
function somma(a, b) {
    return a + b;
}

let tot = somma(n, rundomNumber(1, 5))
console.log("la somma è", tot);

// pari o dispari
function pariODispari(x) {
    if (x % 2 === 0) {
        return "pari";
    }
    else{
        return "dispari";
    }
}

// output
if ( pariODispari(tot) === choice) {
    console.log("Hai vinto");
}
else {
    console.log("Hai perso");
}