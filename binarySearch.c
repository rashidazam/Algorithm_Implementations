// Binary Search Algorithm in C used only for Sorted array
// Start say array A[]
int Binary_Search(int key) // element to be searched
{
	int n=A.length(); //calculate the lenght of givn array
	int beg=0; // mark the begining of array
	int end=n-1; // ebd of array
	int mid; // taking array midpoint 
			While(beg<=end)
				{
					mid = (beg+end)/2;
						if (A[mid] == key)
						return mid;
						else if (key <= A[mid])
						end = mid-1;
						else
						beg = mid+1;
				}
				return -1;
}