const User = require('../model/user_model');

// methodes
// affiche le formulaire
exports.getAddUser = (req, res) => {
    res.render('formulaire', {
        pageTitle : 'Formulaire de nom',
        path: ''
    });
};


// permet de recuperer et sauvegarder les infos renseigner dans l'input
exports.postUser = (req, res) => {
    const user = new User(req.body.name);
    user.save();
    res.redirect('/');
};


// utilise la methode "fetchAll()"
exports.getAllUser = (req, res) => {
    User.fetchAll(users => {
        res.render('accueil', {
            pageTitle : 'Accueil',
            path: '',
            users: users
        });
    });
};