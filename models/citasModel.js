const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let cita = new Schema({
	propietario:{
		type:String
	},
	mascota:{
		type:String
	},
	fecha:{
		type:String
	},
	hora:{
		type:String
	},
	sintomas:{
		type:String
	}
});

const citas = mongoose.model('citas',cita);

module.exports = {citas};