require("./db");

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const productos = require("./controllers/productosController");
const mascotas = require("./controllers/mascotasController");
const citas = require("./controllers/citasController");
const vacunas = require("./controllers/vacunasController");
const bodyParser = require("body-parser");


//app.use(cors({origin:'http://localhost:3000'}));
app.use(cors());

app.use(bodyParser.json());

app.listen(port,()=>{
	console.log("PORT: ", port);
});

app.use('/productos',productos);

app.use('/mascotas',mascotas);

app.use('/citas',citas);

app.use('vacunas',vacunas);
