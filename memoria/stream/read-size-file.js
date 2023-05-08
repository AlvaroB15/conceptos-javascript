console.time('tiempo de respuesta');
const fs = require('fs');
const archivo = fs.createReadStream('./archivoBig.txt', {encoding: 'utf-8'});

let sizeFile = 0;
archivo.on('data', (chunk) => {
    sizeFile += chunk.length;
})


archivo.on('close', (err) => {
    console.log(sizeFile);
})

console.timeEnd('tiempo de respuesta');
