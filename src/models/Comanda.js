class Comanda {
  constructor(mesaId) {
    this.mesaId = mesaId;
    this.items = [];
  }

  agregarItem(item) {
    this.items.push(item);
  }
}

module.exports = Comanda;