const express = require('express');
const router = express.Router();
const usersController = require('../controllers/UzytkownicyController');
router.get('/', usersController.showUsersList);
router.get('/add', usersController.showUsersForm);
router.get('/details/:userId', usersController.showUsersDetails);
module.exports = router;