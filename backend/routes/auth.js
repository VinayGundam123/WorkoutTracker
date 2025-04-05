const express=require('express');
const router=express.Router();

const authController=require('../controllers/auth');

router
    .post('/signUp', authController.signUp)
    .post('/login', authController.login)

exports.router = router;