// Sort an array from lowest to highest
const numbers = [22,3,44,500,11,5,4,1,100]

const lowestToHeighhest = numbers.sort((a,b) =>  a - b)

console.log(lowestToHeighhest)

// heighest to lowest;
const hToL = numbers.sort((a,b) => b - a)
console.log(hToL)