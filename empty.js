// How to empty an array in JavaScript?

let arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
//arrayList = [];
//arrayList.length = 0;
while (arrayList.length){
    const removed = arrayList.pop()
    console.log(removed)
}

console.log(arrayList)