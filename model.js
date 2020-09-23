const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let productos = new Schema({
	name:{
		type:String
	},
	descipcion:{
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

module.exports = mongoose.model("productos",productos);