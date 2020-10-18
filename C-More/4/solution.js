// 4. Skapa en funktion `isSameUser` som accepterar två person-objekt 
// som argument och returnerar `true` ifall deras property email är 
// samma annars `false`

function isSameUser(user1, user2) {
    return user1.email === user2.email
}

const me = {
    name: 'adam',
    email: 'adam@hotmail.com',
    age: 25
}

const friend = {
    name: 'isabelle',
    email: 'isabelle@gmail.com',
    age: 25
}

console.log(isSameUser(me, friend))
console.log(isSameUser(me, { email: 'adam@hotmail.com' }))
