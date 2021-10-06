const mongoose = require("mongoose");

const cities = new mongoose.Schema({
    codePostal: {
        type: String,
        required: true,
    },
    codeCommune: {
        type: String,
        required: true,
    },
    nomCommune: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Cities', cities);
