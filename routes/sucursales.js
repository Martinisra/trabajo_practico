const express = require('express');

const router = express.Router()

const controller = require('../controllers/sucursalesController')

router.get('/',controller.index);
router.get('/:id', controller.sucursal);

module.exports = router;