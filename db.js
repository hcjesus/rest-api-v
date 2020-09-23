const mongoose = require("mongoose");



const uri = "mongodb+srv://root:H3rnandez@cluster0.tdeox.mongodb.net/details?retryWrites=true&w=majority";

const mongoDB = process.env.MONGODB_URI || uri;

//const uri = "mongodb://127.0.0.1:27017/details"; 

mongoose.connect(mongoDB,{
	useNewUrlParser:true,
	useUnifiedTopology: true,
	useFindAndModify:false
});


const connection = mongoose.connection;

connection.once("open",()=>{
	console.log("mongodb connection");
});
