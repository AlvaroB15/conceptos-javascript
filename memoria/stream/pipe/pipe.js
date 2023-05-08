const fs = require('fs');

const streamRead = fs.createReadStream('./archivos/base.txt');
const streamWrite = fs.createWriteStream('./archivos/destino.txt');

streamRead.pipe(streamWrite);

streamRead.on('end', ()=>{
    console.log('Procesp Finalizado');
})
