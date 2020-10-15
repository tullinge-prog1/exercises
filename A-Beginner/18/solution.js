// 18. Skriv en funktion som kollar ifall två strängar är lika 
// (och returnerar `true` i så fall, annars `false`)

function isSame(str1, str2) {
    return str1 === str2
}

console.log(isSame('fofifi', 'flabla'))
console.log(isSame('flabla', 'flabla'))
console.log(isSame('flabla', 'FLABLA'))
