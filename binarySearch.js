var arr = [2, 4, 5, 7, 9, 34]
var key = 9
var result = binarySearch(0, arr.length-1)
if(result != -1){
	console.log("Number found. Index is: " + result)
}
else{
	console.log("Not found!")
}

function binarySearch(l, r){
	mid = Math.floor((l + r) / 2)
	if(l < r){
		if(key == arr[mid])
			return(mid)
		else if(key < arr[mid]){
				return binarySearch(l, mid-1)
			}
		else{
			return binarySearch(mid+1, r)
		}
	}
	return -1
}