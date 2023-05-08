const sharp = require("modulos/paquetes/modulo/sharp");

sharp('logo.png')
    .resize(80)
    .toFile("resized.png")
