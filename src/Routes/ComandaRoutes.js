const express = require('express');
const ComandaSchema = require('../schemas/ComandaSchema');
const Comanda = require("../models/Comanda");
const ItemComanda = require("../models/ItemComanda");

const router = express.Router();

let comandas = [];
let nextID = 1;

router.post("/", (req, res) =>{
  try {
    const {mesa, items} = ComandaSchema.parse(req.body);
    const itemsCreados = items.map(i => new ItemComanda(i.platoId, i.nota, i.cantidad));
    const comanda = new Comanda(nextID++, mesa);

    itemsCreados.forEach(i => comanda.agregarItem(i));
    comandas.push(comanda);

    res.status(201).json(itemsCreados);
  } catch(err) {
    if (err.errors) {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
})

module.exports = router;