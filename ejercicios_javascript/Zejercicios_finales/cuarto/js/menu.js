
const listaTareas = [{descripcion: 'Añadir una tarea :'}]; 

/* Array al que se irán añadiendo objetos compuestos de propiedades, por medio de la función sumarTarea().
Estas propiedades serán las Tareas a realizar(texto suministrado por el usuario) y el Estado de estás (terminado / aún por terminar) 
 No ponemos propiedad ESTADO pues activaría la primera opción del IF TERNARIO ${listaTareas[i].estado ? '(----)' : '(--)'} de la funcion mostrarLista()
*/

function elegirDelMenu() {

/* La función elegirDelMenu() mostrará en la consola las opciones numeradas del menú, y mediante la atribución de un valor 
a la variable OPCION nos permitirá seleccionar cual de ellas llevar a cabo al activarse la función ejecutarOption() y su SWITCH statement.*/

    console.log(`
    ------------MENU-------------

    1. Mostrar la lista de tareas
    2. Añadir una tarea nueva
    3. Marcar una tarea como terminada
    4. Eliminar una tarea
    5. Salir

    -----------------------------`);

    /* El bucle WHILE inicializa el script.
Si el usuario introduce uno de los números de la RegEx, OPCION adquiere un valor y se para el bucle,

devolviendo el valor de OPTION, activando así el Statement SWITCH de la función ejecutarOpcion(). 

Mientras lo introducido sea cualquier otra cosa OPcION queda vacio y el bucle sigue hasta que se cumpla la expresión regular*/

let opcion;

while (!opcion) {
    opcion = window.prompt('Elije una opción del menú.');
    const regex = /^[12345]$/;
    if (regex.test(opcion)) {
        opcion = parseInt(opcion);
    }
    
}
    return opcion;
}

function mostrarLista() {

//Muestra los elementos del ARRAY listaTareas, es decir las Tareas a realizar y su Estado de realización, que contiene dentro de objetos.

    if (!listaTareas.length) {
        console.log(`
        -------------LISTA DE TAREAS VACÍA---------
        `);
    } else {
    console.log(`
        -------Lista completa de tareas------
        `);

    for (let i = 0; i < listaTareas.length; i++) {

     console.log(`${i + 1} -- ${listaTareas[i].descripcion} ${listaTareas[i].estado ? '(Terminada)' : '(Aún por terminar)'}`);
    }                                                        // IF TERNARIO DE MI CURAÇAO!!!
    }
}

function mostrarSegundaLista() { // Esta función sólo pasa a la consola, los elementos del array LISTATAREAS cuyo estado es false o no existe.

    for (let i = 0; i < listaTareas.length; i++) {

        if (listaTareas[i].estado === false || !listaTareas[i].estado) {
        console.log(`${i + 1} -- ${listaTareas[i].descripcion} ${listaTareas[i].estado ? '(Terminada)' : '(Aún por terminar)'}`);
       }
    }
}


 function sumarTarea() { // Añade objetos al ARRAY listaTareas, mediante el método push()
     console.log('Añadir tarea');
     let tarea;

     while (!tarea) {
         tarea = window.prompt('Describe la tarea');
    } 
 
 /*Le sumas objetos.
De primeras ponemos el valor de ESTADO en FALSE para que la función mostrarLista() suministre a la consola el segundo elemento(--)
del IF TERNARIO ${listaTareas[i].estado ? '(----)' : '(--)'} Pero si el valor de ESTADO pasa a ser TRUE, lo devuelto será el primer elemento(----) 
Este valor es cambiado por la función marcarTarea()*/   

    listaTareas.push({ 
        descripcion: tarea,
         estado: false,
        });
 }
 

 function marcarTarea() {

    console.log(`
    -------------Lista de tareas NO terminadas------------
    `);

    mostrarSegundaLista(); //Solo muestra las tareas cuyo ESTADO es AÚN POR TERMINAR

    let numTarea;
    

    while (!numTarea) {
        numTarea = window.prompt('Selecciona tarea a marcar como terminada');
        const regex = /^\d$/;
        if (regex.test(numTarea)) {
            numTarea = parseInt(numTarea);
            if (numTarea < 1 || numTarea > listaTareas.length) {
                numTarea = null;
            }
        }
        
    }
     listaTareas[numTarea - 1].estado = true; //Al restarle 1 al valor de numTarea obtenemos el índice del ARRAY (ya que estos van del 0 al n)
 } //Al cambiar el valor de listaTareas[i].estado de FALSE a TRUE hace que mostrarLista() cambie su valor.

 
function eliminarTarea() { //borra elementos del ARRAY listaTareas por medio del método SPLICE

    console.log(`
    --------------Borrar tarea--------------
    `);

    mostrarLista();

    let numTarea2;

    while (!numTarea2) {
        const regex = /^\d$/;
        numTarea2 = window.prompt('Selecciona el número de la tarea a eliminar.');
        if (regex.test(numTarea2)) {
            numTarea2 = parseInt(numTarea2);
            if (numTarea2 < 1 || numTarea2 > listaTareas.length) {
                numTarea2 = null;
            }
        }
    }
    listaTareas.splice(numTarea2 - 1, 1);          //Al restarle 1 al valor de numTarea obtenemos el índice del ARRAY (ya que estos van del 0 al n)
                                                  // El primer número es el indice del elemento a borrar y el segundo indica la cantidad de elementos a borrar.
}

 function ejecutarOpcion(opcion) {  /*Esta función y su statement SWITCH utilizan el valor OPCION producido por la función elegirDelMenu()
                                     y su bucle WHILE.*/
    switch(opcion) {
        case 1:
            mostrarLista();
            break;
        case 2:
            sumarTarea();
            break;
        case 3:
            marcarTarea();
            break;
        case 4:
            eliminarTarea();
            break;
        case 5:
            console.log('GRACIAS POR UTILIZAR LA APLICACIÓN, CIAOOOOOOOOO!');
            break;    
        default:
            console.log('Opción no válida');
    }
 }

 let opcion;

 while (opcion !== 5) {
     opcion = elegirDelMenu();
     ejecutarOpcion(opcion);
 }

 