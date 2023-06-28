// -- as func de callback das rotas:
const create = (req, res) => {
    const user = req.body

    console.log(user)
};

module.exports = { create };