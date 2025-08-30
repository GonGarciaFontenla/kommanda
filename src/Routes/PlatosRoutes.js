const express = require("express");
const {platoSchema, platoUpdateSchema} = require("../schemas/platoSchema");

const router = express.Router();

let platos = [];
let nextID = 1;

router.post("/", (req, res) => {
  try {
    const nuevoPlato = platoSchema.parse(req.body);

    const plato = {id: nextID++, ...nuevoPlato};
    platos.push(plato);

    res.status(201).json(platos);
  } catch(err) {
    res.status(400).json({error: err.errors});
  }
});

module.exports = router;