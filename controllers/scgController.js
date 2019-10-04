const axios = require('axios');
const GOOGLE_API_KEY = "AIzaSyBpXaSIHmQtgeaHumBfoPdHfmP3ZcHssgA"

exports.getBangsueRestaurants = async (req, res) => {
    var location = req.query.location
    console.log(location)
    var query = JSON.stringify(`restaurants in ${encodeURI(location)}`)
    var path = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&fields=photos,formatted_address,name,rating,opening_hours&key=${GOOGLE_API_KEY}`
    try {
        var response = await axios.get(path)
        res.send(response.data.results)
    } catch (error) {
        console.error(error);
    }
    
}
