const express = require('express');
const userController = require('../controller/users_controller');

const router = express.Router();

const users = [];

// affiche le formulaire
router.get('/users', userController.getAddUser);



// recupère le contenu de l'input
router.post('/user-create', userController.postUser);


exports.routes = router;
exports.users = users;