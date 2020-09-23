require("./db");

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const productos = require("./controllers/productosController");
const mascotas = require("./controllers/mascotasController");
const citas = require("./controllers/citasController");
const vacunas = require("./controllers/vacunasController");
const bodyParser = require("body-parser");

app.set('PORT',PORT);

//app.use(cors({origin:'http://localhost:3000'}));
app.use(cors());

app.use(bodyParser.json());

app.listen(PORT,()=>{
	console.log("PORT: ", PORT);
});

app.use('/productos',productos);

app.use('/mascotas',mascotas);

app.use('/citas',citas);

app.use('vacunas',vacunas);
