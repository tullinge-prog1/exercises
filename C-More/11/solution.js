// 11. Skriv en funktion `doTwice` som accepterar en funktion 
// som argument och anropar den funktionen två gånger

function doTwice(func) {
    func()
    func()
}

// Test nedan
function hello() {
    console.log('Hello!')
}

function bye() {
    console.log('Good bye!')
}

doTwice(hello)
doTwice(bye)
