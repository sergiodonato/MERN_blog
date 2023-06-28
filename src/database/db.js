// -- para conectar com bdD:

const mongoose = require('mongoose')

const connetcDatabase = () => {
    console.log("Perando a conecção com o bD")

    mongoose.connect('mongodb+srv://root:root@cluster0.g85bgkd.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error))
}

module.exports = connetcDatabase