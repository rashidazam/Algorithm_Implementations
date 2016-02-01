var now = Date.now()
var arr = [ 8,5,3,2,1]
console.log("Unsorted Array: \n"+arr)//printing unsorted array
insertionSort(arr)//calling function to sort the array arr
var time = (Date.now()-now)/1000
console.log("\nSorted Array: \n"+arr+"\nTime taken: "+time)//printing the sorted array

function insertionSort(arr){
	for(var i = 0; i < arr.length; i++){
		var temp = arr[i]
		for(var j = i; j > 0 && temp < arr[j-1]; j--){//check all values less than current element and occuring left to it
			arr[j] = arr[j-1]// moving the left side element to one position forward
		}
		arr[j] = temp// moving current element to its correct position
	}
}