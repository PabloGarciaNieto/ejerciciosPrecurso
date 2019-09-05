let hora = parseInt(prompt('Dame la hora'));
let minuto = parseInt(prompt('Dame el minuto'));


if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto < 60) { // Dentro de este IF ELSE hay dos IF
   
    //incrementamos el minuto
   
    minuto = minuto + 1;

    let incrementarHora = false;// no activará el incrementar hora del segundo IF anidado
    
    if (minuto > 59) {
        minuto = '00';
       
        // al incrementar el minuto hemos pasado de hora
       
        incrementarHora = true; // activará incremento de hora del segundo IF anidado
    }
    if (incrementarHora) {
        hora = hora + 1;  // 23+1=24
        hora = hora % 24; // el resto de 24/24=0 (se haya con módulo) así tienes las doce como las 0 horas 
    }                    // los números < 10 no dan resto en n/24 así que se mantienen ellos mismos.
                        // los números entre el 10 y el 23 en n/24 dan como resto a sí mismos.
                        
    console.log(hora + ':' + minuto);
} else {
    console.log('Hora o minuto no valido');
}

/* Lo siguiente falla ya que no cuenta con la posibilidad de 
la introducción de una string en lugar de un número por el user.

let hora = parseInt(prompt('Dame la hora'));
let minuto = parseInt(prompt('Dame los minutos'));

if (hora < 0 || hora > 23 || minuto < 0 || minuto > 59) {
    console.log('Hora o minutos incorrectos');
} else if (minuto < 59) {
    minuto = minuto + 1;
    console.log(hora + ':' + minuto);
} else {
    minuto = 0;
    hora = hora + 1;
    hora = hora % 24;
    console.log(hora + ':' + minuto);
} */

