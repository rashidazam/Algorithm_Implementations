function quickSort(arr){
	if(arr.length > 0){
		var piv = arr[0]
		var left = [], right = []
		for (var i = 1; i < arr.length; i++){
			if( arr[i] < piv )
				left.push(arr[i])
			else
				right.push(arr[i])
		}
		return quickSort(left).concat(piv, quickSort(right))
	}
	return []//returning an empty array when length of array is reduced below 1
}
var arr = [];
for (var i = 0; i < 10; ++i) {
arr[i] = Math.floor((Math.random()*100)+1);
}
console.log(quickSort(arr))