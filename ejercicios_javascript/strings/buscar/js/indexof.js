let texto = prompt('introduce un texto');
let buscar = prompt('palabra/s a buscar');

let pos = texto.indexOf(buscar);

while (pos !== -1) {
    console.log('Encontrada en: ', pos);
    pos = texto.indexOf(buscar, pos + 1);
}
    

