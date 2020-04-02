const express = require('express');
const userController = require('../controller/users_controller');
// const path = require('path');
// const formData = require('./formulaire'); // afin de recupèrer la variable "users" qui se trouve dans "formulaire"

const router = express.Router();



// affiche le nom dans l'accueil
router.get('/', userController.getAllUser);


module.exports = router;