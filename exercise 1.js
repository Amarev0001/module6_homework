let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 'q', '/', '+', '-'];
let counters;

function countEvenOddZeroElementsOfArray() {

let result = [0,0,0];

    array.forEach( function (item) {

        if (typeof Number(item) === "number" && !isNaN(item) && Number(item) !== 0) {
            if (item % 2 === 0) {
                result[0]++;
            } else {
                result[1]++;
            }

        } else if (Number(item) === 0) {
            result[2]++;
        }
    })

return result;

}

counters = countEvenOddZeroElementsOfArray();

console.log(`Even = ${counters[0]}`);
console.log(`Odd = ${counters[1]}`);
console.log(`Zero = ${counters[2]}`);