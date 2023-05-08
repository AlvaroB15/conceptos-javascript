const os = require('modulos/os');

// Arquitectura del procesador, 64 bits o 86 (32 bits)
console.log(os.arch());

// En qué plataforma donde está corriendo el codigo
console.log(os.platform());

// Saber la cantidad de nucles de tu procesador
console.log(os.cpus());
console.log(os.cpus().length);

console.log(os.constants);

// Memoria libre que se tiene , en bits
const SIZE = 1024;
const kb = (bytes) => bytes / SIZE;
const mb = (bytes) => kb(bytes) / SIZE;
const gb = (bytes) => mb(bytes) / SIZE;

console.log(os.freemem()); // Memoria libre
console.log(os.totalmem()); //Memoria total
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// El directorio home de tu cpu
console.log(os.homedir());

// El directorio de temporales de tu cpu
console.log(os.tmpdir());

// nombre de la pc
console.log(os.hostname());

// Las interfaces de red que tiene la pc
console.log(os.networkInterfaces());
