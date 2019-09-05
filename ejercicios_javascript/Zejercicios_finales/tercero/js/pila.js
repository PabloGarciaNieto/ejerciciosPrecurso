/*SE PUEDE CREAR UN OBJETO CON ESTRUCTURA Y FUNCIÓN DE PILA, FORMÁNDOLO CON UN ARRAY COMO PROPIEDAD
 QUE SIRVA DE CONTENEDOR DE ELEMENTOS, Y UNA SERIE DE MÉTODOS QUE NOS AYUDEN A INTRODUCIR Y BORRAR ELEMENTOS,
 ASÍ COMO INORMAR SOBRE EL TAMAÑO DEL ARRAY, SI ESTÁ VACÍO O NO, Y QUE ELEMENTOS HEMOS IDO SACANDO */

const stack = {
    array: [],

    push: function(el) { //Introducir elementos al final de la Pila
        this.array.push(el);
    },
    pop: function() {   //Borrar elementos del final de la Pila
        if (this.array.length === 0){
            return null;
        }
        return this.array.pop();
        
    },
    size: function() {    //Informa del tamaño de la Pila
        return this.array.length; 
    },
    empty: function() {   //Indica si la Pila está vacía
        
        return this.array.length === 0;
    },
    splice: function (tic, toc) {  //Borra elementos de cualquier posición de la Pila
        this.array.splice(tic, toc);
    }
};


stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size() === 3);
console.log(stack.pop() === 3);

stack.push(4);

console.log(stack.empty() === false);
console.log(stack.pop() === 4);
console.log(stack.pop() === 2);
console.log(stack.pop() === 1);
console.log(stack.pop() === null);
console.log(stack.size() === 0);
console.log(stack.empty() === true);



stack.push('galletas');
stack.push('chocolate');
stack.push('bombones');
stack.push('leche');

console.log(stack.array);

console.log('Deja sólo la leche y las galletas');

stack.splice(1, 2);

console.log(stack.array);

console.log(stack.pop() === 'leche'); //EL MÉTODO CONSOLE.LOG() TAMBIÉN HACE QUE SE EJECUTEN LAS ACCIONES DE LA PILA

console.log(stack.array); //EL ELEMENTO LECHE HA SIDO ELIMINADO POR LA ACCIÓN DEL CONSOLE.LOG() ANTERIOR.
