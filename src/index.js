module.exports = function reverse(n) {
    let numbplus = Math.abs(n)
    let str = numbplus.toString().split('').reverse().join('');
    let numb = Number(str)
    return numb;
}
