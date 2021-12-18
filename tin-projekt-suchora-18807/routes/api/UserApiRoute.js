const express = require('express');
const router = express.Router();
const UserApiController = require('../../api/UserAPI');
router.get('/', UserApiController.getUser);
router.get('/:_id', UserApiController.GetUserById);




module.exports = router;