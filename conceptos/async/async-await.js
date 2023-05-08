const hola = async (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("========Sincronooo========");
            console.log(`Hola ${name}, esta es una funcion asincrona`);
            resolve(name);
        }, 1000)
    })
}

const hablar = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BLA BLA BLA ... ...")
            resolve("Hay un error");
        })
    })
}

const adios = async (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("========Sincronooo========");
            console.log(`Adios ${name}`);
            resolve();
        }, 1000)
    })
}

// - - -

const main = (async () => {
    try {
        const name = await hola("Alvaro");
        await hablar();
        await hablar();
        await hablar();
        await adios(name);
        console.log("FIN")
    } catch (error) {
        throw new Error(error);
    }
});

console.log("INICIANDO")
main()
