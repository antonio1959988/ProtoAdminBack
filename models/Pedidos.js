const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pedidosSchema = new Schema({
    // LLamar a la entidad clientes
    cliente: {
        type: Schema.ObjectId,
        ref: 'Clientes'
    },
    pedido: [{
        producto: {
            type: Schema.ObjectId,
            ref: 'Productos'
        },
        cantidad: Number
    }],
    total: {
        type: Number
    }
})

module.exports = mongoose.model('Pedidos', pedidosSchema)