// 8. Skriv en funktion som accepterar en array av person-objekt 
// med properties `firstName` och `lastName` och som returnerar
//  en array av deras fulla namn (förnamn och efternamn) som strängar

function wholeNames(persons) {
    return persons.map(function(p) {
        return p.firstName + ' ' + p.lastName
    })
}

const dinnerGuests = [
    {
        firstName: 'Donald',
        lastName: 'Trump'
    },
    {
        firstName: 'Vladimir',
        lastName: 'Putin',
    },
    {
        firstName: 'Sauron',
        lastName: ''
    }
]

console.log(wholeNames(dinnerGuests))
