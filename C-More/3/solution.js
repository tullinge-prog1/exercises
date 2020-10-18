// 3. Skapa en funktion `isSameAge` som accepterar två person-objekt 
// som argument och returnerar `true` ifall deras property age är 
// samma annars `false`

function isSameAge(user1, user2) {
    return user1.age === user2.age
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

console.log(isSameAge(me, friend))
