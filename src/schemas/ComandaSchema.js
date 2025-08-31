const {z} = require("zod");
const ItemSchema = require("./ItemComandaSchema");

const ComandaSchema = z.object({
  mesaId: z.number().min(1),
  items: z.array(ItemSchema).min(1, "La comanda debe tener al menos un plato")
});

module.exports = ComandaSchema;