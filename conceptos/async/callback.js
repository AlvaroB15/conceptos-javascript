const hola = (name, callback) => {
    setTimeout(() => {
        console.log("========Sincronooo========");
        console.log(`Hola ${name}, esta es una funcion asincrona`);
        callback();
    }, 1000)
}

const adios = (name, callback) => {
    setTimeout(() => {
        console.log("========Sincronooo========");
        console.log(`Adios ${name}`);
        callback();
    }, 1000)
}

console.log("INICIANDO el file en callback");

hola("Alvaro", () => {
    adios("Alvaro", () => {
        console.log("FINALIZANDO el file en callback");
    })
});
