const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const cors = require('cors');
const port = 3012;


mongoose.connect('mongodb://localhost:27017/books_db', {

})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error al conectar a MongoDB:', error));

app.use(cors({
  origin: '*', // Permite solicitudes desde esta URL
  methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
}));

app.use(express.json());


app.use('/', bookRoutes);


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
