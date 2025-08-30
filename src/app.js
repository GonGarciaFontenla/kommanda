const express = require('express');
const platoRoutes = require('./routes/PlatosRoutes');

const app = express();

app.use(express.json());
app.use("/platos", platoRoutes);

module.exports = app;
