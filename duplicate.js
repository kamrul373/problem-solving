// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

const duplicate = arr => {
   return arr.concat(arr)
}
const arr = [1, 2, 3, 4, 5]
console.log(duplicate(arr))