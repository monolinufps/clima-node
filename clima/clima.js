const axios = require('axios');

const getclima = async(lnat, lng) => {

    let lant = encodeURI(lnat);
    let lngg = encodeURI(lng);
    let confirm = await axios.get(`http://api.openweathermap.org/data/2.5/weather?
    lat=${lant}&lon=${lngg}&&units=metric&appid=1364b7685b8d1f611a002258d6525119`)
    if (confirm.data.status === 'ZERO_RESULTS') {
        return 'Error no hay resultado con esos datos';
    }
    return confirm.data.main.temp;
};
module.exports = {
    getclima
};