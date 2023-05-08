const fs = require('fs');

const leer = (ruta, cbk) => {
    fs.readFile(ruta, (err, data) => {
        cbk(data.toString())
    })
};

const escribir = (ruta, contenido, cbk) => {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error("NO se ha podido escribir por: ", err);
        } else {
            cbk("Se ha escrito correctamente");
        }
    });
}

const borrar = (ruta, cbk) => {
    fs.unlink(ruta, (err) => {
        if (err) {
            console.error("NO se ha podido escribir por: ", err);
        } else {
            cbk("Se ha borrado correctamente");
        }
    });
}

escribir(`${__dirname}/FileWrite.txt`, "ARCHIVO NUEVo", console.log);

leer(`${__dirname}/FileTest.txt`, console.log);

borrar(`${__dirname}/FileWrite.txt`, console.log);
