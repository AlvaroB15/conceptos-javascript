const fs = require('fs');

console.time('tiempo de respuesta');

for (let i = 0; i < 10; i++) {
    // fs.readFileSync('archivo.txt','utf-8');                          // 6265.5 ms
    fs.readFile('archivo.txt', {encoding: 'utf-8'}, (err, data) => {
        console.log(data.length);
    });        // 6265.5 ms
    // fs.createReadStream("archivo.txt", { encoding: "utf-8" });          // 1.9 ms
}

console.timeEnd('tiempo de respuesta');


/**
 *                  Estos stream ayudan a que se lee de forma PROGRESIVAMENTE el archivo, esto ayuda a no bloquear los procesos que se llevan en node
 *
 *
 * Node tiene 4 tipos de Stream :
 *      - Writable streams
 *      - Readable streams
 *      - Duplex streams
 *      - Transform streams
 */
