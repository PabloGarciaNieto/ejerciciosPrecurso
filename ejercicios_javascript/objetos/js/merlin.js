const merlin = {
    nombre: 'Merlín',
    salud: 20,
    ataque: 13,
    sanacion: 5,
    informacion: function() {
         console.log('La salud de Merlín es: ' + this.salud);
            
         if (this.salud <= 0) {
            console.log('Merlín ha muerto!');
        }
    },

    ataca: function(enemigo) {
        enemigo.salud = enemigo.salud - this.ataque;
    },

    sana: function() {
        this.salud += this.sanacion;
    }
};

const morgana = {
    nombre: 'Morgana',
    salud: 22,
    ataque: 12,
    sanacion: 1,
    informacion: function() {
        console.log('La salud de Morgana es: ' + this.salud);

         if (this.salud <= 0) {
            console.log('Morgana ha muerto!');
        }
    },
    ataca: function(enemigo) {
        enemigo.salud = enemigo.salud - this.ataque;
    },
    sana: function() {
        this.salud += this.sanacion;
    }
};

merlin.informacion();
morgana.informacion();

while (merlin.salud > 0 || morgana.salud > 0) {

    const atacante = prompt('¿Quién quieres que ataque?');
    const sanado = prompt('¿Quién quieres que sane?');

    console.log('Tras el ataque de: ' + atacante + ' y tras la sanación de: ' + sanado);
    
    if (atacante === 'merlin' || atacante === 'Merlin' || atacante === 'Merlín' || atacante === 'merlín' ) {
        merlin.ataca(morgana);
    } else if (atacante == 'morgana' || atacante == 'Morgana') {
        morgana.ataca(merlin);
    } else {
        console.log('Ningún personaje del juego se llama ' + atacante);
    }

    if ( sanado === 'merlin' || 'merlín' || sanado === 'Merlin' || sanado === 'Merlín') {
        merlin.sana();
    } else if (sanado === 'morgana' || sanado === 'Morgana') {
        morgana.sana();
    } else {
        console.log('Ningún personaje del juego se llama ' + sanado);
    }
    merlin.informacion();
    morgana.informacion();

    if (morgana.salud <= 0 || merlin.salud <= 0) {    // Con esto el bucle se detiene ya que al haber un vencedor no es necesario seguir luchando
        break;
    }
}
    if (morgana.salud <= 0 && merlin.salud <= 0) {
        console.log('Los dos la han palmado ¡qué pringaos!');
    } else if (merlin.salud <= 0) {
        console.log('Parece que Morgana le ha dao pal pelo a Merlín.');
    } else if (morgana.salud <= 0) {
        console.log('Parece que Merlín le ha dao pal pelo a Morgana.');
    } else {
        console.log('Aunque son dos verdaderos pendejos han conseguido salir con vida.');
    }



/* let ataca = prompt('¿Quién quieres que ataque?');

function atacante(ataca) {
    if (ataca == 'merlin') {
     morgana.salud = morgana.salud - merlin.ataque;
    } else if (ataca == 'morgana') {
        merlin.salud = merlin.salud - morgana.ataque;
    }
}

let sana = prompt('¿Quién quieres que sane?');

function curado(sana) {
    if (sana == 'merlin') {
     merlin.salud = merlin.salud + merlin.sanacion;
    } else if (sana == 'morgana') {
        morgana.salud = morgana.salud + morgana.sanacion;
    }
}

console.log('Tras el ataque de: ' + ataca + ' y tras la sanación de: ' + sana);

atacante(ataca);
curado(sana);

merlin.informacion();
morgana.informacion();


 for ( let i = 4; i > 0; i--) {
    let ataca = prompt('¿Quién quieres que ataque?');

    let sana = prompt('¿Quién quieres que sane?');

console.log('Tras el ataque de: ' + ataca + ' y tras la sanación de: ' + sana);

atacante(ataca);
curado(sana);

merlin.informacion();
morgana.informacion();

 }
 */
