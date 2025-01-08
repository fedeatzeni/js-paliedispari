//si inserisce una parola 
//la gira e controlla se è uguale alla parola inserita

let word = prompt("inserisci una parola")
console.log(word);

console.log(isPalindrome(word));


function isPalindrome (str) {
    let result
    
    let reversed = str.split("").reverse().join("");
    console.log(reversed);

    if (reversed === str) {
        result = "La parola è palindroma"
    }
    else {
        result = "La parola non è palindroma"
    }

    return result

}