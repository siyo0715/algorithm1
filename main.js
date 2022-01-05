const a = [20, 10, 30, 60, 50, 90, 70, 40]
        //[10, 20, 30, 40, 50, 60, 70, 90]; //8
function bsort(array) {
    //配列の長さを取得
    let len = array.length;
    //右側から決めるための大きいループ
    for (let i = 0; i < len; i++){
        for (let x = 0; x < len - i; x++) {
            if (array[x] > array[x + 1]) {
                [array[x], array[x + 1]] = [array[x + 1], array[x]];
            }
        }
    }
    // return array;
    return {min:array[0],max:array[len-1]}
}
console.log(bsort(a));