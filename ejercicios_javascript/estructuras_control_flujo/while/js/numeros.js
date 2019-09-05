let num = parseInt(prompt('Dame un número entre 1 y 10'));

while (num < 1 || num > 10) {
    num = parseInt(prompt('Dame un número entre 1 y 10'));
}
console.log('El número es ' + num);