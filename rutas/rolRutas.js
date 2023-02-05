const express = require('express');
const router = express.Router();
const rolService = require('../servicios/rolServicio');

router.get('/', async function (req, res, next) {
    try {
        res.json(await rolService.getAll());
    } catch (error) {
        console.error('Error al obtener datos de rol', err.message);
        next(err);
    }
});

module.exports = router;