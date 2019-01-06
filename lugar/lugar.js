const axios = require('axios');

const getLugarln = async(direccion) => {

    let encodedurl = encodeURI(direccion);
    let confirm = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedurl}&key=
    AIzaSyCE_ouAEJS0Vd3PaTGpN66DT3B_RcZc6z8`)
    if (confirm.data.status === 'ZERO_RESULTS') {
        return 'Error no hay resultado';
    }
    let localizacion = confirm.data.results[0];
    let coordenadas = localizacion.geometry.location;
    return {
        direccion: localizacion.formatted_address,
        ltd: coordenadas.lat,
        lng: coordenadas.lng
    };
    //console.log(JSON.stringify(confirm.data, undefined, 2));
};

module.exports = {
    getLugarln
};