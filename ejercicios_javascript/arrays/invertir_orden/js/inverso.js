let array = [1, '2', 3, '4', 5];

console.log(array);

let inverso =[];   // En este array vacio van introduciendose los elementos de la cola del primero siguuiendo el concepto de Pila, o Stack


for (let i = array.length; i > 0; i--) {    // La longitud de array va disminuyendo a medida que el pop() le resta elementos
                                            //  además del decremento causado por i--
                                            // ¡¡¡¡¡OJO!!!!!! (i = 0; i < array.length; i++) no sirve ya que el array va decreciendo debido al pop()
                                            // e i va aumentando por lo que llega un momento que i es > array.length antes de recorrer
                                            // todos los elementos del array del principio.El loop colapsa antes de tiempo i = 3 y array.length = 2 ¡BOOM!
    let last = array.pop();

    let añadir = inverso.push(last);

}

console.log(inverso);


/* existe un método para invertir un array, pero OJO, 
no ordena tan sólo intercambia el primer elemento con el último, el segundo con el penúltimo etc..*/

let arrakis = ['A', 'b', 'c', 'd', 'e'];

console.log(arrakis);

arrakis.reverse();

console.log(arrakis);