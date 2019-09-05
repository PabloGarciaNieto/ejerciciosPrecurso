const texto = `<html>
    <body>
        <h1>Soy un titulo</h1>
        <h1 class="test">Y yo otro</h1>
        <p>Yo un parrafo</p>
        10 25 36 91
        polteus@gmail.com
    </body>
</html>`; // lo de los números es cosa mía

const clearstart = /<h1\s*[^>]*>/g;

const clearend = /<\/h1>/g;

console.log(texto.replace(clearstart, '<h2>').replace(clearend, '</h2>'));

const regex = /\b10\s*[^1]*1\b/g; // Tiene que empezar por 10 y terminar por 1, en medio vale cualquier cosa.

console.log(regex.test(texto));

const regmail = /\b[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-\.]+\.[a-zA-Z]{2,5}\b/; //regex para validar mails

console.log(regmail.test(texto));