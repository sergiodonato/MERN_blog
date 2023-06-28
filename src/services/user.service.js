// -- se conecta com o banco e mostra:

const User = require("../models/User")

// -- método do moongose que cria o schema no padrão do import(create):
const create = (body) => User.create(body)

module.exports = {
    create,
}