const request = require('postman-request')

const forecast = (latitude, longitude, access_key, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+ access_key + '&query='+ latitude +','+ longitude +'&units=f'
    request(url, (error, response, body) => {
        if(error) {
            callback('Unable to connect to weather API', undefined)
        }
        else if(JSON.parse(body).error) {
            callback('Unable to find location.', undefined)
        }
        else {
            const {temperature, feelslike} = JSON.parse(body).current
            callback(undefined, {
                temperature: temperature,
                feelslike: feelslike
            })
        }
    })
}

module.exports = forecast