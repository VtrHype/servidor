//  backend/models/Ronda.js
const mongoose = require('mongoose');

const rondaSchema = new mongoose.Schema({
    placa: String,
    nome: String, 
    matricula: String, 
    cliente: String,
    hChegada: String,
    hSaida: String,
    contatoLocal: String,
    motivoDisparo: String,
    descricao: String,
    data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ronda', rondaSchema);


