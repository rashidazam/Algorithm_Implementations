var arr = [ 18, 15, 17, 11, 36, 3 ]
function binaryHeap(){
	this.heap = [0]
	this.show = show
}
function insert(x){
	this.heap.push(x)
	var len = this.heap.length
	while(len > 1){
		if(x < this.heap[Math.floor(len/2)])
			
	}
}

function show(){
	console.log(this.heap)
}

var heap1 = new binaryHeap()
heap1.insert(5)
heap1.show()