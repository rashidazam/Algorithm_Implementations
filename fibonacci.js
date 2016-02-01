var num = 60
console.log("The fibonacci sum of " + num + " is " + ": " + fibo(num))

//Recursive function
// function fibo(num){
// 	if ( num == 1 || num == 2)
// 		return 1
// 	else
// 		return ( fibo( num - 1 ) + fibo( num - 2 ) )
// }

//Iterative function
function fibo(num){
	var fibo = []
	fibo[0] = fibo[1] = 1
	for( var i = 2; i < num; i++){
		fibo[i] = fibo[i-1] + fibo[i-2]
	}
	return fibo[num-1]
}