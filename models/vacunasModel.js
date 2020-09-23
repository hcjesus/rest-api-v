const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let vacuna = new Schema({
	idmascota:{
		type:String
	},
	rabia:{
		aplicacion1:{
			type:String
		},
		aplicacion2:{
			type:String
		},
		aplicacion3:{
			type:String
		},
		aplicacion4:{
			type:String
		},
		aplicacion5:{
			type:String
		}
	},
	moquillo:{
		aplicacion1:{
			type:String
		},
		aplicacion2:{
			type:String
		},
		aplicacion3:{
			type:String
		},
		aplicacion4:{
			type:String
		},
		aplicacion5:{
			type:String
		}
	},
	hepatitis:{
		aplicacion1:{
			type:String
		},
		aplicacion2:{
			type:String
		},
		aplicacion3:{
			type:String
		},
		aplicacion4:{
			type:String
		},
		aplicacion5:{
			type:String
		},
	},
	parvovirus:{
		aplicacion1:{
			type:String
		},
		aplicacion2:{
			type:String
		},
		aplicacion3:{
			type:String
		},
		aplicacion4:{
			type:String
		},
		aplicacion5:{
			type:String
		}
	}	
});

const vacunas = mongoose.model('vacunas',vacuna);

module.exports = {vacunas};