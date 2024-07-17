ari = [100, 24, 54, 22, 8, 90, 1003]

const bubbleSort = function(arr) {
    for(i = 0; i<arr.length-1; i++){
        for(j = i+1; j<arr.length; j++){
            if(arr[j] < arr[i]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubbleSort(ari)
console.log(ari)
