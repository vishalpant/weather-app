const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
const weatherstack_access_key = process.argv[3]
const geocode_access_token = process.argv[4]

if(address){
    geocode(address, geocode_access_token, (error, {location, latitude, longitude}) => {
        if(error) {
            return console.log(error)
        }

        forecast(latitude, longitude, weatherstack_access_key, (forecastError, {temperature, feelslike}) => {
            if(error) {
                return console.log(error)
            }
            console.log(location, temperature, feelslike)
        })
    })
}
else {
    return console.log('Please provide a location')
}