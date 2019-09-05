let mes = prompt('Introduce mes');

if (mes == 'febrero') {
        console.log(mes + ' tiene 28 días.');
} else if (mes == 'junio' || mes == 'abril' || mes == 'septiembre' || mes == 'noviembre') {
    console.log(mes + ' tiene 30 días.');
} else if (mes == 'enero' || mes == 'marzo' || mes == 'mayo' || mes == 'julio' || mes == 'agosto' || mes == 'octubre' || mes == 'diciembre') {
    console.log(mes + ' tiene 31 días.');
} else {
    console.log(mes + ' no es un mes, inténtalo de nuevo');
}
        
            
                
