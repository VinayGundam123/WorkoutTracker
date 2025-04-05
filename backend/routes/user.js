const express = require('express');
const router = express.Router();

const userController=require('../controllers/user');

router
    .get('/:id', userController.getUser)
    .patch('/:id', userController.updateUser);

exports.router = router;