const Cities = require('../models/cities.model');

//Recuperer les villes en fonctions de la saisi dans l'input
exports.getOneCity = (req, res) => {
    const data = new RegExp('^'+req.query.data)
   
    Cities.find({$or : [
        {nomCommune: { $regex: data }},
        {codePostal: { $regex: data }}
    ]})
    .then ((response) => {
        let overseas = response.filter(city => city.codePostal >= 96000)
        let metropole = response.filter(city => city.codePostal < 96000)
        return res.status(200).send({metropoleCities: metropole, overseasCities: overseas})
    })
    .catch(err => {
        console.log('GET request err', err)
    })
    
}