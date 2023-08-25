module.exports = function reverse(n) {
    const str = String(n);
    const reversedString = str.split('').reverse().join('');

    return parseInt(reversedString);
}
