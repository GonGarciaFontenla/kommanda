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

router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const {nombre, categoria, precio} = req.body;

  const plato = platos.find(p => p.id === id);

  if(!plato) {
    return res.status(400).json({error: `No existe un plato con id ${id}`});
  }

  try {
    if (nombre !== undefined) plato.nombre = nombre;
    if (categoria !== undefined) plato.categoria = categoria;
    if (precio !== undefined) plato.precio = precio;

    res.json(plato);
  } catch(err){
    res.status(400).json({error: err.errors});
  }
})

router.patch("/:id/disponibilidad", (req, res) => {
  const id = parseInt(req.params.id);
  const plato = platos.find(p => p.id === id);

  if(!plato) {
    return res.status(400).json({error: `No existe un plato con id ${id}`});
  }

  try {
    const {disponible} = req.body;

    if(typeof disponible !== "boolean") {
      return res.status(400).json({error: "El campo 'disponible' debe ser booleano "});
    }

    plato.disponible = disponible;
    res.json(plato);
  } catch (err) {
    return res.status(400).json({error: err.errors});
  }
});

module.exports = router;