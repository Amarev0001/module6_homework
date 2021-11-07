let n = prompt('Число', '3');
let res = true;
n = +n;
if (n > 1000) {

    alert('Введите число меньше 1000');

}else {

    if (n === 0 || n === 1) {

        if (n === 0) {
            console.log('null');
        } else {
            console.log('one');
        }

    } else {

        for (let i = 2; i < n; i++) {

            if (n % i === 0) {
                res = false;
                break;
            }

        }
    }
}
if (res === true){
    console.log(`"${n}" - простое число.`);
}else {
    console.log(`"${n}" - составное число.`);
}