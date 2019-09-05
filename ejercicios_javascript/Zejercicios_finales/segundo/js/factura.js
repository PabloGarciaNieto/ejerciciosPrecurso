
/*LA CLAVE DE ESTE EJERCICIO ES CREAR UN ARRAY DE OBJETOS, PARTIENDO DE FUNCIONES QUE NOS PROPORCIONARÁN
LAS PROPIEDADES QUE CONFORMARAN A ESTOS ÚLTIMOS Y UN BUCLE WHILE QUE LO ACTIVARÁ TODO (con ayuda de la variable MORE declarada en 
ámbito global con valor de true en la línea 56) E IRÁ AÑADIENDO LOS OBJETOS COMO ELEMENTOS DEL ARRAY

Estos objetos estarán formados por 2 propiedades: El concepto a facturar y su base imponible, las cuales estarán vinculadas por pertenecer
al mismo objeto. */

//Los BUCLES declarados en ámbito global tienen la característica de activarse sin necesidad de invocación.
//de ahí que el bucle de la línea 55 active las funciones según las va invocando.

const conceptos = [];   // Array vacio al que se irán añadiendo objetos que constarán de dos propiedades.

function getDescription() {

    let description;

    const regex = /((\d+\s)?[a-z]){1,}/i;// Al menos una vez{1,}, cero o una vez números seguidos de un espacio. letras por cojones. /Case insensitive/i

    while (!description) {

     description = window.prompt('Introduce concepto a facturar, bitte.');

     if (!regex.test(description)) {
         description = null;
         continue;
     }
    }

    return description;
}


function getBase() {

    let base;
    const regex = /^\d+(\.\d+)?$/; //inician la cadena uno o más dígitos, puede ser seguido ninguna o una vez por un punto y un número o más y fin de cadena

    while (!base) {

    base = window.prompt('Introduce base imponible sobre el concepto, bitte.');

     if (!regex.test(base)) { //si la regex no se cumple, pongo un ! para que la condición resuelva true y se aplique el código del IF
         base = null;
         continue;
     }

    base = parseFloat(base);   //transforma el string en número.
    }
    return base;
}   

// Las propiedades de los objetos del array seran halladas con las funciones getDescripcion() y getBase()

// la funcion addMore() cambia el valor de la variable MORE, que puede desactivar el bucle WHILE o hacer que continue
                     
function addmore() {

    return window.confirm('¿Desea añadir más conceptos a la factura?');

    //El método del window.confirm() devuelve true si el usuario pulsa aceptar y false si pulsa cancelar
}

 let more = true; //DETONADOOOOOOOOOOOORRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
 
// aunque éste se reproducirá al menos una vez, ya que MORE empieza declarada como true fuera del bucle.

  while (more) {   ///////TODO se ACTIVA a partir de este bucle WHILE!!!!!!!!!-------------------------------------------!!!!!!!!!!!
     const concepto = {}; //Se crea un objeto vacío
     concepto.description = getDescription(); ////Esto activa la función en ambito global de la línea 7, desde aquí es invocada.
     concepto.base = getBase(); //Luego se activa ésta
     conceptos.push(concepto); //Se introduce el objeto CONCEPTO en el ARRAY CONCEPTOS de la línea 12.
     more = addmore(); //Y luego ésta
 }


// La variable 'total' se declara a cero para poder usar 'total+=' y así poder ir sumando las cantidades que va ofreciendo el bucle FOR

 let total = 0;

// Si el usuario sólo diese un concepto(y su base) el bucle FOR se da una vez y se para, 
// si da más de un concepto, el bucle sigue al aumentar la length de conceptos.

 for (let i = 0; i < conceptos.length; i++) {

    console.log(`Concepto: ${conceptos[i].description} --- Base imponible: ${conceptos[i].base}`);

    total += conceptos[i].base;
 }


 console.log(`Base total: ${total}`);
 console.log('iva: ' + (total * 0.21));
 console.log('Total factura: ' + (total * 1.21) + ' e');

