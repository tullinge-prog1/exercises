// 23. Skriv en funktion `isDivisibleByFive` som returnerar `true`/`false` 
// om argumentet är delbart med 5

function isDivisbleByFive(n) {
    return n % 5 === 0
}

// true
console.log(isDivisbleByFive(5))
console.log(isDivisbleByFive(125))
console.log(isDivisbleByFive(100))

// false
console.log(isDivisbleByFive(6))
console.log(isDivisbleByFive(99))
console.log(isDivisbleByFive(251))
