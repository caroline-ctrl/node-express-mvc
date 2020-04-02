// ce dont j'ai besoin
const path = require('path');
const fs = require('fs');

// pour stocker les info en json dans un dossier "data"
const folder = path.join('data', 'users.json');

// methode = lire le fichier users.json
const getUserJson = ((callback) => {
    fs.readFile(folder, (err, fileContent) => {
        if (err) {
            return callback([]);
        } else {
            callback(JSON.parse(fileContent)); // JSON.parse = transforme le JSON contenu dans le dossier "data" en js
        };
    });
});


// création d'une classe User
module.exports = class User
{
    constructor(title)
    {
        this.title = title;
    }


    // methode de sauvegarde
    save()
    {
        getUserJson((users) => {
            users.push(this);
            fs.writeFile(folder, JSON.stringify(users), (err) => {
                console.log(err);
            });
        });
    };


    // methode static qui recupère tout
    static fetchAll(callback)
    {
        getUserJson(callback);
    }
};