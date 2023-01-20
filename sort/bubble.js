const arr = [5,4,21,1,7,9,55,15,2,0]

const swap = (arr,n1,n2) => {
	const temp = arr[n1];
	arr[n1] = arr[n2]
	arr[n2] = temp
}

const buublesort = (arr) => {
	for(let i = 0; i<= arr.length; i++){
		for(let j = 0; j<= arr.length; j++){
			if(arr[j] > arr[j+1]){
				swap(arr,j, j+1)
			}
		}
	}
}

const newarr = buublesort(arr)

console.log(arr)
