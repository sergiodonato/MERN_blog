// -- para conectar com bdD:

import mongoose from "mongoose"
// const mongoose = require('mongoose')

const connetcDatabase = () => {
    console.log("Perando a conecção com o bD")

    mongoose
        .connect( process.env.MONGODB_URI,
            {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error))
}

export default connetcDatabase
