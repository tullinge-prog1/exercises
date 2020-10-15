// 17. Skriv en funktion isTanja som returnerar 
// true ifall argumentet är strängen "Tanja"  och annars false

function isTanja(x) {
    return x === 'Tanja'
}


// Det behövs alltså ingen if-else-sats
// x === 'Tanja' är ett uttryck som 
// antingen har värdet true eller false


// Alternativ, längre lösning
function isTanja2(x) {
    if (x === 'Tanja') {
        return true
    } else {
        return false        
    }
}

console.log(isTanja('Ilona'))
console.log(isTanja('Zlatan'))
console.log(isTanja('Tanja'))
console.log(isTanja2('Tanja'))
