const Eventemitter = require('events');

const emisorProductos = new Eventemitter();

emisorProductos.on('compra', /*manejadores de eventos -> */ (valor, numeroProducto) => {
    console.log(`Total de la compra: ${valor}\nCantidad de articulos: ${numeroProducto}`);
});

emisorProductos.emit('compra', 3000, 5);