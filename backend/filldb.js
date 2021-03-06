const mongoose = require("mongoose");
const Cities = require('./models/cities.model');
const axios = require('axios');

const getAllCities = () => {
    return axios({
        method: "get",
        url: "https://unpkg.com/codes-postaux@3.3.0/codes-postaux.json",
    }).then((response) => response.data);
}

const filldb = async() => {
    let cities = []
    console.log('Remplissage de la db en cour...')
    mongoose.connect("mongodb+srv://admin:admin@graneetapi.cvkb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    cities = await getAllCities()
    Cities.insertMany(cities).then(() => {
        console.log('remplissage db done !')
        mongoose.disconnect();
    }) .catch((err)=> {
        console.log(err)
    });  
}

//permet de recuperer les donnees du JSON et remplir la base de donnés avec.
filldb()