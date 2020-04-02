const User = require('../model/user_model');

// methodes
// permet de recuperer et sauvegarder les infos renseigner dans l'input
exports.getAddUser = (req, res) => {
    const user = new User(req.body.name);
    user.save();
    res.redirect('/');
};
