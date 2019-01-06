const argv = require('./config/config').argv;
const getLugarln = require('./lugar/lugar');
const clim = require('./clima/clima');

let infot = async(direccion) => {

    // el error  lo puedo manejar con try tambien
    let coors = await getLugarln.getLugarln(direccion);
    let temp = await clim.getclima(coors.ltd, coors.lng);
    return `El clima de la ciudad ${direccion} es de ${temp}`;
};

infot(argv.direccion)
    .then(confirm => console.log(confirm))
    .catch(err => console.log(err));