const partidasModel = require ('../models/partidasModels')

const show = async (req, res) => {

    const id = req.params;
    try {
        const resultado = await partidasModel.findOne(id);
        return res.status(200).send(resultado);
    } catch (e) {
        return res.status(500).send({error: 'Error obteniendo los resultados'});
    }
};

const create = async (req, res) => {

    const params = req.body
    try {
        const partida = await new partidasModel(params);
        partida.save();
        return res.status(200).send(partida);
    } catch (e) {
        return res.status(500).send({error: 'Error obteniendo los resultados'});
    }
};


module.exports = {show, create};