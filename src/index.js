
exports.min = function min (array) {
    if(arguments.length == 0) return 0;
    if(array.length == 0) return 0;
    let sortArr = array.sort((a,b) => a - b)
    return sortArr[0];
}

exports.max = function max (array) {
    if(arguments.length == 0) return 0;
    if(array.length == 0) return 0;
    let sortArr = array.sort((a,b) => b - a)
    return sortArr[0];
}

exports.avg = function avg (array) {
    if(arguments.length == 0) return 0;
    if(array.length == 0) return 0;
    let result = 0;
    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result / array.length;
}
