const {z} = require("zod");

const TipoPlato = require("../models/CategoriaPlato");

const platoSchema = z.object ({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  categoria: z.enum([
      TipoPlato.ENTRADA,
      TipoPlato.PRINCIPAL,
      TipoPlato.POSTRE,
      TipoPlato.BEBIDA
  ]),
  precio: z.number().positive('El precio debe ser un número positivo')
});

//Permite hacer updates...
const platoUpdateSchema = platoSchema.partial();

module.exports = {platoSchema, platoUpdateSchema};