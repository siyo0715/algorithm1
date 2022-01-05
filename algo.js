const a = [20, 10, 30, 60, 50, 90, 70, 40]
        //[90, 70, 60, 50, 40, 30, 20, 10]; //8
function brsort(array) {
    //配列の長さを取得
    let len = array.length;//8
    //右側から決めるための大きいループ
    for (let i = len; i>0; i--){
        //比較するか目のfor文
        for (let x = len; x > len - i; x--) {
            if (array[x] > array[x - 1]) {
                [array[x], array[x - 1]] = [array[x - 1], array[x]];
            }
        }
    }
    return array;
}
console.log(brsort(a));