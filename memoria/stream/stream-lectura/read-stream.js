const fs = require('fs');

const stream_read = fs.createReadStream('./mi-archivo.txt', {encoding: 'utf-8'});

stream_read
    .on('open', () => {
        console.log('Se ABRIO el stream del archivo');
    })
    .on('close', () => {
        console.log('Se CERRO el stream del archivo');
    })
    .on('data', (data) => {
        console.log('----');
        console.log(data.length);
        console.log(data);
        console.log('----');
    })
    .on('error', () => {
        console.log('Hubo un error al leer el archivo');
    })
    .on('readable', (data) => {
        console.log('-- READABLE-- ');
        console.log(data);
    })
