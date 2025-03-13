// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/auth/signup', userController.createUser);
router.get('/auth/users', userController.getUsers);
router.post('/auth/login', userController.loginUser);

module.exports = router;