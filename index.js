
// JavaScript Program to find the sum of all non-repeated
// elements in an array

// Find the sum of all non-repeated elements
// in an array
function findSum(arr, n)
{
	// sort all elements of array
	arr.sort();

	let sum = 0;
	for (let i=0; i<n; i++)
	{
		if (arr[i] != arr[i+1])
			sum = sum + arr[i];
	}

	return sum;
}

// Driver code

	let arr = [1, 2, 3, 1, 1, 4, 5, 6];
	let n = arr.length;
	document.write(findSum(arr, n));


