// 5. Skapa en funktion `filterOdds` som accepterar en array av tal 
// som argument och som returnerar en ny array utan udda tal (odd)

// Jag väljer att dela upp det här problemet i två små funktioner

function isOdd(n) {
    return n % 2 === 1
}

function filterOdds(numbers) {
    return numbers.filter(isOdd)
}

const manyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(filterOdds(manyNumbers))
