const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cities = require("./routes/cities")
const cors = require("cors");

app.use(cors());

mongoose.connect(
    'mongodb+srv://admin:admin@graneetapi.cvkb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    ).then(() => {console.log('Connexion to mongoDb success')})
    .catch(err => {console.log('Connexion to mongoDb err: ', err)})


app.use("/cities",cities)
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(8080);