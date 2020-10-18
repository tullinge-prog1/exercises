// 9. Skriv en funktion `wordCount` som returnerar antalet 
// ord i en sträng

function wordCount(str) {
    return str.split(' ').length
}

console.log(wordCount('Jag är en groda som bor i dammen'))
console.log(wordCount('Hej då'))
