//   backend/controllers/rondasController.js

const Ronda = require('../models/Ronda');

exports.saveRondas = async (req, res) => {
    try {
        const rondas = req.body;
        const savedRondas = await Ronda.insertMany(rondas);
        res.status(201).json(savedRondas);
        console.log(Ronda);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao salvar rondas', error });
    }
};

