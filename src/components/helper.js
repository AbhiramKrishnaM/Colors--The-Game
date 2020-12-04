function getArr(arr){

    var rand = arr[Math.floor(Math.random()*arr.length)];
    return rand;

}

export {getArr};