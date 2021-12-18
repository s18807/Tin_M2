const express = require('express');
const router = express.Router();
const transakcjeController = require('../controllers/TransakcjeController');
router.get('/', transakcjeController.showTransakcjeList);
router.get('/add', transakcjeController.showProduktyForm);
router.get('/details/:userId', transakcjeController.showTransakcjeDetails);
module.exports = router;