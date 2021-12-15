function sortWithoutMoveTree(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i ; j <arr.length ; j++){
            if(arr[i] != -1 && arr[j] != -1){
                if(arr[j] < arr[i]){
                    let tmp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = tmp
                }
            }
        }
    }
    return arr

}
console.log(sortWithoutMoveTree([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(sortWithoutMoveTree([0, 150, 50, -2, 200, -1, 16, -1]))