var now = Date.now()
var arr = [ 3, 1, 5, 2, 8, 33, 34, 23, 64, 32, 63, 32, 86, 66];
console.log("Unsorted Array: \n"+arr);//printing unsorted array
mergeSort(arr, 0 , ((arr.length)-1) );//calling function to sort the array arr
var time = (Date.now()-now)/1000
console.log("\nSorted Array: \n"+arr+"\nTime taken: "+time);//printing the sorted array

function mergeSort(arr, start , end ){
	if( start < end ){
		var mid = Math.floor( ( start + end ) / 2);
		mergeSort(arr, start , mid );
		mergeSort(arr, mid+1 , end );
		merge(arr, start , mid , end );
	}
}
function merge(arr, l , m , r ){
	var lptr = l; var rptr = m+1;//Starting positions of both the subarrays in temporary variables
	var k = 0; var temp = [];//Declaring a new temporary subarray for storing the sorted array
	for( var i = l ; i <= r ; i++ ){
		if(lptr > m){
			temp[k] = arr[rptr]
			k++;rptr++
		}
		else if(rptr > r){
			temp[k] = arr[lptr]
			k++;lptr++
		}
		else if( arr[lptr] < arr[rptr] ){
			temp[k] = arr[lptr];
			lptr++;k++
		}
		else{
			temp[k] = arr[rptr];
			rptr++;k++
		}
	}
	for( var u = 0; u < k; u++ ){
		arr[l] = temp[u];
		l++;
	}
}