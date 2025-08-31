const TipoPlato = require('./CategoriaPlato');

class Plato {
    constructor(nombre, categoria, precio, disponible) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.disponible = disponible;
    }
}

module.exports = Plato;