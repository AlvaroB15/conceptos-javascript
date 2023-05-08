let suma = 0;

console.time("bucle");

// SINCRONO
for (let i = 0; i < 100000000; i++) {
    suma += 1;
}
console.timeEnd("bucle");

const asincrona = () => {
    return new Promise((resolve) => {
        console.log("Termino el proceso asincrono");
        resolve();
    })
}

console.log("Empieza el proces asincrono");
console.time("asincrona");
asincrona().then(() => {
    console.timeEnd("asincrona");
});

