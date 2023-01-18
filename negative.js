// Create a function that filters out negative numbers

const filterNegative = numbers => {
    return numbers.filter(num => Math.sign(num) !== -1)
}

const numbers = [22,-3,44,500,-11,-5,4,1,100]
const filtered = filterNegative(numbers);
console.log(filtered)

