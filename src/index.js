module.exports = function reverse (n) {
    let arr = Math.abs(n).toString().split('');
    let result = '';
    for (let i = (arr.length - 1); i >= 0; i--) {
        result = `${result}${arr[i]}`;
    }
    return +result;
}