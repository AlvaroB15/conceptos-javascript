console.log("ALGO");
console.info("Este es una info");
console.error("Este es un error");
console.warn("Este es un warning");

const tabla = [
    {
        id: 1,
        data: 'Z'
    },
    {
        id: 2,
        data: 'Y'
    }
]
console.table(tabla);

console.group("Conversacion");
console.log("Texto Conversacion 1")
console.log("Texto Conversacion 2")
console.group("Es una subconversacion");
console.log("Texto de SUB Conversacion 1")
console.log("Texto de SUB Conversacion 2")
console.groupEnd();
console.log("Texto Conversacion 3")
console.log("Texto Conversacion 4")
console.groupEnd();

console.log("Esto es otra cosa")

const funcionUno = () => {
    console.group("Funcion 1")
    console.log("Estoo es de la funcionn 1")
    console.log("Estoo TMB es de la funcionn 1")
    funcionDos();
    console.log("Hemos vuelto a la funcion 1")
    console.groupEnd()
}

const funcionDos = () => {
    console.group("Funcion 2")
    console.log("Ahora estamos en la funcion 2")
    console.groupEnd()
}

funcionUno();

console.log("XDDD");

// COunt
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
