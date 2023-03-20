function findSum(arr, n)
	{
		let sum = 0;

	
		let s = new Set();
		for (let i = 0; i < n; i++)
		{
			if (!s.has(arr[i]))
			{
				sum += arr[i];
				s.add(arr[i]);
			}
		}
		return sum;
	}

	
	let arr = [1, 2, 3, 1, 1, 4, 5, 6];
		let n = arr.length;
		console.log(findSum(arr, n));

