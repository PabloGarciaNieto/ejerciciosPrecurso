const personajes = [{
    clase: 'Sacerdote',
    daño: 100,
    sanacion: 1200    
}, {
    clase: 'Guerrero',
    daño: 900,
    sanacion: 0
}, {
    clase: 'Mago',
    daño: 700,
    sanacion: 100
}, {
    clase: 'Monje',
    daño: 100,
    sanacion: 1000
}, {
    clase: 'Caballero de la muerte',
    daño: 1000,
    sanacion: 10
}];

function asc(a, b) {
    
    if (a.daño !== b.daño) {

    return b.daño - a.daño; //ordena de mayor a menor DESCENDENTEMENTE es como b > a return 1

    } else {
       return b.sanacion - a.sanacion; //igual pero con sanación
   }
}

personajes.sort(asc);

console.log(personajes);

for (let i = 0; i < personajes.length; i++) {
    console.log(personajes[i].clase);
}

/*
function sorty(a, b) {
    if (b.daño > a.daño) {
        return 1;
    } else if (b.daño < a.daño) {
        return -1;
    } else {
     if (b.daño == a.daño) {
        return b.sanacion - a.sanacion;
    }
}
}

personajes.sort(sorty);

console.log(personajes);

let l = personajes.length;

for (let i = 0; i < l; i++) {

    console.log(personajes[i].clase);
}
*/
