const express = require('express');
const platoRoutes = require('./routes/PlatosRoutes');
const comandaRoutes = require('./routes/ComandaRoutes');

const app = express();

app.use(express.json());
app.use("/platos", platoRoutes);
app.use("/comandas", comandaRoutes);

module.exports = app;
