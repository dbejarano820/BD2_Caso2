"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/prueba');
var gatoSchema = new mongoose_1.Schema({ name: String });
var gato = mongoose.model('Gatazo', gatoSchema);
var kitty = new gato({ name: "Bobby" });
await kitty.save();
