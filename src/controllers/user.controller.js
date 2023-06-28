// -- as func de callback das rotas:
const soma = (req, res) => {
    const soma = 100 + 1;

    res.send({ soma: soma });
};

module.exports = { soma };