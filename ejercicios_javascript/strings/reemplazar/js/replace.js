let texto = 'JavaScript es un lenguaje de programación que nacio en 1995. JavaScript no tiene que ver en nada con Java';

let pos = texto.indexOf('JavaScript');

while (pos !== -1) {
    texto = texto.replace('JavaScript', 'JAVASCRIPT');
    pos = texto.indexOf('JavaScript', pos + 1);
}

console.log(texto);

