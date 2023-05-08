const hola = (name, callback) => {
    setTimeout(() => {
        console.log("========Sincronooo========");
        console.log(`Hola ${name}, esta es una funcion asincrona`);
        callback(name);
    }, 1000)
}

const hablar = (callback) => {
    setTimeout(() => {
        console.log("BLA BLA BLA ... ...")
        callback();
    })
}

const adios = (name, callback) => {
    setTimeout(() => {
        console.log("========Sincronooo========");
        console.log(`Adios ${name}`);
        callback();
    }, 1000)
}

const conversacion = (nombre, veces, callback) => {
    if (veces > 0) {
        hablar(() => {
            conversacion(nombre, --veces, callback)
        })
    } else {
        adios(nombre, callback);
    }
}

console.log("INICIANDO el file en callback");

hola("Carlos", (nombre) => {
    conversacion(nombre, 10, () => {
        console.log("FINALIZANDO el file en callback");
    });
})

// hola("Carlos", (name) => {
//     adios(name, () => {
//         console.log("FINALIZANDO el file en callback");
//     })
// })

//CALLBACK HELL
// hola("Alvaro", (name) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(name, () => {
//                     console.log("FINALIZANDO el file en callback");
//                 })
//             })
//         })
//     })
// });
