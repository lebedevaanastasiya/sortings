function QuickSort(array, left, right){
	var Left = left;
	var Right = right;
	var middle;
  var l_plus_r = left + right;
	middle =  array[(l_plus_r - l_plus_r % 2) / 2];
  console.log(middle);
	while(Left <= Right){
		while( (Left < right ) && (array[Left] < middle  ) )
			Left++;
		while( (Right > left) && (array[Right] > middle ) )
			Right--;
		
		if(Left <= Right){
      console.log(array[Left], array[Right]);
			var temp = array[Left];
			array[Left] = array[Right];
			array[Right] = temp;
			
			Left++;
			Right--;
		}
    console.log(array);
	}

	if (Left <= right)
		QuickSort(array, Left, right);
	if (Right >= left)
		QuickSort(array, left, Right);
}

function GetQuickSortedArray(){
	var array_input = document.getElementById("array_input");
	var array = array_input.value;
	array = array.split(',').map(Number);
  console.log(array);
	QuickSort(array, 0, array.length - 1);
	var sorted_array = array;
	array_input.value = sorted_array.toString();
}