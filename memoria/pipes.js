const fs = require('fs');
const stream = require("stream");

let data = "";

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf8');
let createStream = fs.createWriteStream(__dirname + '/InputTransform.txt');

readableStream.on('data', (chunk) => {
    console.log("----CHUNK---");
    // console.log(chunk);
    data += chunk;
});

readableStream.on('end', () => {
    // console.log('La data del buffer es: ' + data);
});

const upperCase = new stream.Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase())
    }
})

readableStream.pipe(upperCase).pipe(createStream);
