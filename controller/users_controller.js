const User = require('../model/user_model');

// methodes
// permet de recuperer et sauvegarder les infos renseigner dans l'input
exports.getAddUser = (req, res) => {
    res.render('formulaire', {
        pageTitle : 'Formulaire de nom',
        path: ''
    });
};


// 
exports.postUser = 