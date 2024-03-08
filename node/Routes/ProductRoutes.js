const express = require('express');
const router = express.Router()
const { addProducts } = require('../Controlers/ProductControler');


//  Add product to Daashboard model
router.post('/addProducts', addProducts);

module.exports = router;