const TipoPlato = require('./CategoriaPlato');

class Plato {
    constructor(nombre, categoria, precio) {
        if (!Object.values(TipoPlato).includes(categoria)) {
            throw new Error(`Categoría inválida: ${categoria}`);
        }
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

module.exports = Plato;