const {z} = require("zod");

const ItemComandaSchema = z.object ({
  platoId: z.number().int().positive('El id del plato debe ser un numero entero positivo'),
  nota: z.string().optional(),
  cantidad: z.number().min(1, 'La cantidad debe ser al menos 1')
});

module.exports = ItemComandaSchema;