const {exec, spawn} = require('child_process');

// ls -la, xq estoy en linux
// exec('ls -la', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err)
//         return false;
//     }
//     console.log(stdout);
// });

exec('node ./conceptos/modulos/console.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        return false;
    }
    console.log(stdout);
});

exec('python3 ./unir.py', (err, stdout, stderr) => {
    if (err) {
        console.error({err})
        return false;
    }
    console.log(stdout);
});

const proceso = spawn('ls', ['-la']);
// console.log({proceso});
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log("Esta muerto?");
    console.log(proceso.killed);
    console.log(dato.toString());
})
proceso.on('exit', () => {
    console.log(proceso.killed);
    console.log("El proceso EXIT");
})

proceso.on('close', () => {
    console.log(proceso.killed);
    console.log("El proceso CLOSE");
})

proceso.on('disconnect', () => {
    console.log(proceso.killed);
    console.log("El proceso DISCONNECT");
})
