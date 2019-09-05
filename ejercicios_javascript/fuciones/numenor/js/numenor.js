let num1 = parseInt(prompt('Dame un número'));
let num2 = parseInt(prompt('Dame un número'));
let num3 = parseInt(prompt('Dame un número'));

function numEnor(num1, num2, num3) {

    if (num1 < num2) {
        if (num1 < num3) {
            return num1;
        } else {
            return num3;
        }
    } else if (num2 < num3) {
        return num2;
    } else {
        return num3;
    }

}

console.log('El número ' + numEnor(num1, num2, num3) + ' es el menor');
 






