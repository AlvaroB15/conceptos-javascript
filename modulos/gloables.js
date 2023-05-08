console.log(global);

let i = 0;
const intervalo = setInterval(() => {
    if (i === 3) {
        clearInterval(intervalo);
    }
    console.log("Hola " + i);
    i++;
});

setImmediate(() => {
    console.log("RAA");
})

console.log(__dirname);
console.log(__filename);
