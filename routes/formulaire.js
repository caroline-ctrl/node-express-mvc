const express = require('express');

const router = express.Router();

const users = [];

// affiche le formulaire
router.get('/users', (req, res) => {
    res.render('formulaire', {pageTitle : 'Formulaire de nom', path: ''});
});



// recupère le contenu de l'input
router.post('/user-create', (req, res) => {
    users.push({name: req.body.name});
    res.redirect('/');
});


exports.routes = router;
exports.users = users;