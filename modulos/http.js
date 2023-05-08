const http = require('http');

const router = (req, res) => {
    console.log("Nueva peticion");
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write("HOLA, que tal")
            res.end();
            break;
        default:
            res.write('Error 404, no se lo que quieres')
            res.end()
    }

    // res.writeHead(201, {'Content-Type': 'text/plain'})
    // res.write('Hola , de un get de HTTP')
    // res.end();
}

http.createServer(router).listen(3000);
console.log("Listening in port 3000");
