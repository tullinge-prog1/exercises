// 21. Skriv en funktion `isEven` som returnerar `true` 
// om argumentet är jämnt och `false` om argumentet är udda

function isEven(x) {
    return x % 2 === 0
}

// Udda
console.log(isEven(1))
console.log(isEven(5))
console.log(isEven(3))
console.log(isEven(9341))

// Jämna
console.log(isEven(2))
console.log(isEven(64))
console.log(isEven(1000000))
console.log(isEven(99999992))
