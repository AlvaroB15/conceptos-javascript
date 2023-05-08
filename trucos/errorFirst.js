const asincrona = (callback) => {
    try {
        setTimeout(() => {
            try {
                let a = 3 + z;
                callback(null, a);
            } catch (error) {
                callback(error);
                // throw new Error(error);
            }
        }, 1000)

    } catch (error) {
        throw new Error(error);
    }
    // setTimeout(() => {
    //     try {
    //         let a = 3 + z;
    //         callback(null, a);
    //     } catch (error) {
    //         callback(error);
    //         // throw new Error(error);
    //     }
    // }, 1000)
}
try {

    asincrona((err, data) => {
        if (err) {
            // console.error("Tenemos un error");
            // console.error(err)
             // return false
            throw err;
        }
        console.log("Todo ha ido bien, mi data es", data);
    })

} catch (error) {
    // console.error("Hay un error", error);
    throw new Error(error);
}
