const express = require('express');
const router = express.Router();
const produktyController = require('../controllers/ProduktyController');
router.get('/', produktyController.showProduktyList);
router.get('/add', produktyController.showProduktyForm);
router.get('/details/:userId', produktyController.showProduktyDetails);
module.exports = router;