
let mes = prompt('Introduce mes');

mes = mes.toLowerCase(); // por si lo escriben con mayúsculas

switch (mes) {
    case 'febrero':
        console.log(mes + ' tiene 28 días.');
        break;
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
                console.log(mes + ' tiene 30 días.');
                break; 
            case 'enero':
            case 'marzo':
            case 'mayo':
            case 'julio':
            case 'agosto':
            case 'octubre':
            case 'diciembre':
                    console.log(mes + ' tiene 31 días.');
                    break; 
                default:
                        console.log(mes + ' no es un mes, inténtalo de nuevo.');
                        break;

}



