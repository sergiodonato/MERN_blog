// -- para conectar com bdD:

const mongoose = require('mongoose')

const connetcDatabase = () => {
    console.log("Perando a conecção com o bD")

    mongoose.connect('mongodb+srv://root69:root69@cluster0.hduktsv.mongodb.net/', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error))
}

module.exports = connetcDatabase