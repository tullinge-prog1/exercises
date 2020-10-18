// 2. Skriv en funktion som accepterar en array som argument 
// och byter ut sista elementet mot strängen "virus"

function infect(arr) {
    arr[arr.length - 1] = 'VIRUS'
}

const fruits = [ 'apple', 'bapple', 'pear' ]
const countries = [ 'Sweden', 'Switzerland', 'Zambia', 'Uganda']

console.log('BEFORE:')
console.log(fruits)
console.log(countries)

infect(fruits)
infect(countries)

console.log('\nAFTER:')
console.log(fruits)
console.log(countries)
