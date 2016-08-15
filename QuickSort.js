function QuickSort(array, left, right){
	var Left = left;
	var Right = right;
	var middle;
	
	if(right > left){
		middle =  array[(left + right) / 2];
		while(Left <= Right){
			while( (Left < right ) && (Number(array[Left]) < Number(middle) ) )
				Left++;
			while( (Right > left) && (Number(array[Right]) > Number(middle) ) )
				Right--;
			
			if(Left <= Right){
				var temp = array[Left];
				array[Left] = array[Right];
				array[Right] = temp;
				
				Left++;
				Right--;
			}
		}
			
		if (Left < right)
			QuickSort(array, Left, right);
		if (Right > left)
			QuickSort(array, left, Right);
	
	}
}

function GetQuickSortedArray(){
	var array_input = document.getElementById("array_input");
	var array = array_input.value;
	array = array.split(',');
	QuickSort(array,0, array.length - 1);
	var sorted_array = array;
	array_input.value = sorted_array.toString();
}