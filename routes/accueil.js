const express = require('express');
const path = require('path');
const formData = require('./formulaire'); // afin de recupèrer la variable "users" qui se trouve dans "formulaire"

const router = express.Router();



// affiche le nom dans l'accueil
router.get('/', (req, res) => {
    const users = formData.users;
    res.render('accueil', {pageTitle : 'Accueil', path: '', users: users});
});


module.exports = router;