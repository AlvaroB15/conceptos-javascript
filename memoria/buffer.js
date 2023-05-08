// Estoy generando 4 espacios de memoria (4 bytes)
let buffer = Buffer.alloc(4);
let bufferDos = Buffer.from([1, 2, 5]);
let bufferTres = Buffer.from("Hola mundo");
let bufferAbecedario = Buffer.alloc(26);


console.log(buffer);
console.log(bufferDos);
console.log(bufferTres);
console.log(bufferTres.toString());
console.log(bufferAbecedario);

for (let i = 0; i < 26; i++) {
    bufferAbecedario[i] = i + 97;
}

console.log(bufferAbecedario);
console.log(bufferAbecedario.toString());
