// 7. Skriv en funktion som accepterar en array av 
// namn t.ex. `["Klas", "Filip", "Maja", "..."]` och som 
// för varje namn loggar ut en hälsning till konsolen

function greet(name) {
    console.log('Hello there ' + name + '!')
}

function greetAll(names) {
    names.forEach(greet)
}

const fellowship = [ 'Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragon', 'Legolas', 'Gimli', 'Boromir']

greetAll(fellowship)

