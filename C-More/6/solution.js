// 6. Skriv en funktion `addFoo` som accepterar en array och 
// lägger till ett nytt element "Foo" som sista element i arrayen
//  och returnerar ingenting

function addFoo(arr) {
    arr.push('foo')
}

const myArr = [ 'thing1', 'thing2', 'thing3' ]

addFoo(myArr)

console.log(myArr)
