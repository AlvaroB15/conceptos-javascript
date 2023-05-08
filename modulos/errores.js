const otraFuncion = () => {
    return seRompe();
}

const seRompe = () => {
    return 3 + z;
}

const seRompeAsincrona = (cbk) => {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error("Error en mi funcion asincrona");
            cbk(error);
        }
    })
}

try {
    // otraFuncion();

    seRompeAsincrona((err) => {
        console.log(err.message);
    });
} catch (error) {
    console.error("VAya algo se ha roto ...")
    console.error(error)
    console.log("Pero no pasa nada, lo hemos capturado");
}

console.log("Esto de aqui esta al fin");
