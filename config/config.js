const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion para la ciudad ',
        demand: true
    }
}).argv;
module.exports = {
    argv
};