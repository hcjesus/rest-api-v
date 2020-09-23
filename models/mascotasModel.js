const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let mascota = new Schema({
	nombre:{
		type:String
	},
	raza:{
		type:String
	},
	edad:{
		type:String
	},
	especie:{
		type:String
	},
	sexo:{
		type:String
	},
	peso:{
		type:String
	},
	propietario:{
		type:String
	},
	vacunas:{
		rabia:{
			type:Boolean
		},
		moquillo:{
			type:Boolean
		},
		hepatitis:{
			type:Boolean
		},
		leptospirosis:{
			type:Boolean
		},
		parvovirus:{
			type:Boolean
		},
		coronavirus:{
			type:Boolean
		},
		parainfluenza:{
			type:Boolean
		},
		polivalente:{
			type:Boolean
		},
		polivalevteRefuerzo:{
			type:Boolean
		}
	}
});

const mascotas = mongoose.model('mascotas',mascota);

module.exports = {mascotas};