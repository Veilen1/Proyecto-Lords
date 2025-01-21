const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.get('/api', (req, res) => res.send('API funcionando'));
app.get('/', (req, res) => res.send('API funcionando'));

// Exportar la aplicación para que Vercel la reconozca como serverless
module.exports = app;

// Conexión con MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.error(err));
