function getSum(a) {
    return function (b) {
        let x;
        x = a + b;
        return x;
    }
}
numAplus = getSum(5);
console.log(numAplus(3));