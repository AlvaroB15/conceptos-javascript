const hola = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("========Sincronooo========");
            console.log(`Hola ${name}, esta es una funcion asincrona`);
            resolve(name);
        }, 1000)
    })
}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BLA BLA BLA ... ...")
            // resolve(nombre);
            reject("Hay un error");
        })
    })
}

const adios = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("========Sincronooo========");
            console.log(`Adios ${name}`);
            resolve();
        }, 1000)
    })
}

// - - -

console.log('Iniciando el proceso.....');
hola("Alvaro")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso..');
    })
    .catch(err => {
        console.error(`Hubo un error: ${err}`);
    })
