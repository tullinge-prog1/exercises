// 16. Skriv en funktion checkAge som accepterar ett tal age som argument 
// och returnerar strängen "old" om age är större än 65 
// annars returnerar "young"

function checkAge(age) {
    if (age > 65) {
        return 'old'
    } else {
        return 'young'
    }
}

// Young
console.log(checkAge(4))
console.log(checkAge(15))
console.log(checkAge(55))

// Old
console.log(checkAge(92))
console.log(checkAge(67))
console.log(checkAge(83))