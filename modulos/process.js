// const process = require('process');

process.on('exit', () => {
    console.log('El proceso acabo');
});

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
    // setTimeout(() => {
    //     console.log("Esto si se mostrara");
    // }, 0)
});

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos ha olvidado capturar un error');
    console.error(err);
});

process.on('exit', (err, origen) => {
    console.error('El proceso de acabo y solo hara cosas sincronas');
    setTimeout(() => {
        console.log("Esto no se mostrara nunca, ya que es asincrono");
    }, 0)
});

// test();
