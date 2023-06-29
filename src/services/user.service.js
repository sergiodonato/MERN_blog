// -- se conecta com o banco e mostra:

const User = require("../models/User")

// -- método do moongose que cria o schema no padrão do import(create):
const createService = (body) => User.create(body)

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background,
    ) => User.findOneAndUpdate({ _id: id }, {
        name,
        username,
        email,
        password,
        avatar,
        background,
    })

module.exports = {
    createService,
    findAllService,
    findByIdService,
    updateService,
}