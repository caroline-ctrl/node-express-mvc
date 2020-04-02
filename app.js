const express = require('express');
const accueilRoute = require ('./routes/accueil');
const formulaireRoute = require('./routes/formulaire');
const parser = require('body-parser');
const path = require('path');

const app = express();

// pour ejs
app.set('view engine', 'ejs');

// css
app.use(express.static(path.join(__dirname, 'public')));

// parcer
app.use(parser.urlencoded({extended: true}));

app.use(accueilRoute);
app.use(formulaireRoute.routes);// ajout de "routes" qui est dans l'extends de "formulaire"

app.use((req, res) => {
    res.status(404).render('404', {pageTitle : '404', path: ''});
})

app.listen(3000);