const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// crear la coneccion a la base de datos
const db = require('./config/db');

// importar el modelo
require('./models/Proyectos');
db.sync()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.log(error));

// iniciar express app
const app = express();

// donde cargar los archivos estáticos
app.use(express.static('public'));

// habilitar pug
app.set('view engine', 'pug');

// añadir carpeta de views
app.set('views', path.join(__dirname, './views'));

// habilitar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// ruta para pagina de inicio
app.use('/', routes());

const PORT = 5000;

app.listen(PORT, console.log(`App corriendo en el puerto ${PORT}`));
