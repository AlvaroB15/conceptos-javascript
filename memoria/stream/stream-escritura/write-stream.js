console.time('tiempo de respuesta');
const fs = require('fs');

let contenido = "1234567890";
let iteraciones = 25;

const streamEscritura = fs.createWriteStream('./mi_archivo.txt');

for (let i = 0; i < iteraciones; i++) {
    contenido += contenido;
}
streamEscritura.write(contenido, res => {
    console.log('... Escribiendo ...');
})
console.log(contenido.length);

fs.writeFile('./archivo/mi_archivo.txt', contenido, () => {
    console.log('Escritura directa finalizada');
})
console.timeEnd('tiempo de respuesta');
