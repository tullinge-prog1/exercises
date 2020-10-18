// 10. Skriv en funktion makePerson som accepterar 
// strängarna `firstName` och `lastName` och som returnerar 
// ett objekt med dessa properties, samt propertyn `isHuman` 
// som är satt till `true`

function makePerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        isHuman: true
    }
}

const person1 = makePerson('Kalle', 'Johansson')
const person2 = makePerson('Linn', 'Persson')

console.log(person1)
console.log(person2)
