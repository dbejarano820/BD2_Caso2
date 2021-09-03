const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/caso2')

//PedidosYa
const pedidosya = mongoose.model('pedidosya',
{
    categoriaDeComida: String,
    categoriaDeComidaImagenURL: String,
    restaurantes: [
        {
            name: String,
            imageURL: String,
            rating: Number,
            envioPrecio: Number,
            tiempoEnvio: Number,
            ubicacion: [{
                latitude: Number,
                longitute: Number
            }],
            filtros: [String]
        }
    ]
});


