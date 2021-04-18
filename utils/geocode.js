const request = require('postman-request')

const geocode = (address, access_token, callback) => {
    const geoCodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + access_token
    request(geoCodingUrl, (error, response, body) => {
        if(error) {
            callback('Unable to connect to Geocoding service', undefined)
        }
        else if(JSON.parse(body).features.length === 0) {
            callback('Unable to find the location', undefined)
        }
        else {
            const {center, place_name} = JSON.parse(body).features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            })
        }
    })
}

module.exports = geocode