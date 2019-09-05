let hora = parseInt(prompt('Dame la hora')); // este ejemplo No tiene puta utilidad ni sentido pero la anidación es válida


while (hora > 0) {
    let minuto = parseInt(prompt('Dame el minuto'));

    if (minuto < 5) {
        console.log('to pota madre');
    }
    if (minuto >= 5) {
        console.log('yesquita');
    }
    hora--;
} 


