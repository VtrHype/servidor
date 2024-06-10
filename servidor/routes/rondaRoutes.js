//  backend/routes/rondaRoutes.js
const express = require('express');
const router = express.Router();
const { saveRondas } = require('../controllers/rondasController');

router.post('/save', saveRondas);

module.exports = router;

