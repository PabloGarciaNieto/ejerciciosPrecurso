const divs = document.getElementsByTagName('div');
const numdivs = divs.length;

console.log('Número de elementos DIV: ' + numdivs);

const clases = document.querySelectorAll('.animated');
const numclases = clases.length;

console.log('Número de elementos con clase "animated" : ' + numclases);

const direccion = document.getElementById('home');

console.log('Dirección web donde enlaza el elemento con id "home": ' + direccion.href);

const secciones = document.getElementsByTagName('section');
const parrafos = secciones[1].getElementsByTagName('p');
const numparrafos = parrafos.length;

console.log('Número de elementos <p> en el segundo <section> : ' + numparrafos);






