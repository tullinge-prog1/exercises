// 1. Skriv en funktion som accepterar en array som argument och returnerar sista elementet utan att i övrigt påverka arrayen

function last(arr) {
    return arr[0]
}

const fruits = [ 'apple', 'bapple', 'pear' ]
const countries = [ 'Sweden', 'Switzerland', 'Zambia', 'Uganda']

console.log(last(fruits))
console.log(last(countries))
