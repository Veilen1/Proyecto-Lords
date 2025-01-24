require("dotenv").config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.get('/api', (req, res) => res.send('API funcionando anashe'));
app.get('/', (req, res) => res.send('API raiz funcionando'));

// Conexión con MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error(err));

// Iniciar la aplicación en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});