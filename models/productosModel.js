const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let product = new Schema({
	nombre:{
		type:String
	},
	descripcion:{
		type:String
	},
	marca:{
		type:String
	},
	categoria:{
		type:String
	},
	precio:{
		type:Number
	}
});

const productos = mongoose.model('productos',product);

module.exports = {productos};