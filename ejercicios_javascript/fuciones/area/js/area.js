const radio = parseFloat(prompt('Introduce el radio'));

// area de un circulo = PI x radio al cuadrado
// perimetro de un circulo = 2PI x radio

function area(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function perimetro(radio) {
    return 2 * Math.PI * radio;
}

console.log('Un círculo de radio: ' + radio + ' tiene un area de ' + area(radio) + ' y un pèrímetro de ' + perimetro(radio));