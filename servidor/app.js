//  backend/app.js

const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Importe o pacote cors

console.log('URI do MongoDB:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conectado ao MongoDB');
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
});

const app = express();

app.use(cors({
    origin: 'https://vtrhype.github.io' // Configure a origem permitida
}));//'http://127.0.0.1:5500'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rondaRoutes = require('./routes/rondaRoutes');
app.use('/api/rondas', rondaRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
