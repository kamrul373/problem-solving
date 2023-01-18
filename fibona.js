// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

let fibona = [0, 1]
for(let i = 2; i<= 10 ; i++){
    fibona[i] = fibona[i-1] + fibona[i-2];
}

console.log(fibona)