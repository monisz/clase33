//pasos:
// crear la carpeta del proyecto
// entrar a esa carpeta
// crear el .gitignore
// npm i -y y npm i express como siempre
// poner el node_modules en el .gitignore
// 

const express = require('express');
const app = express();

app.use(express.static('public'));
// o const path = require('path);
// y app.use(express.static(path.join(__dirname, 'public)));

/* app.get('/', (req, res) => { */
/*     res.send(index) */
/* }); */

app.listen(8080, () => {
    console.log("escuchando!");
});