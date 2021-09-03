import { Schema } from "mongoose";


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/prueba')


const gatoSchema = new Schema({name:String});
const gato = mongoose.model('Gatazo',gatoSchema);

const kitty = new gato({name: "Bobby"});
await kitty.save();


