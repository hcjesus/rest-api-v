const express = require("express");
const router = express.Router();
const {mascotas} = require("../models/mascotasModel");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/",(req,res)=>{
	mascotas.find({},(err, result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/:id",(req,res)=>{
	mascotas.findById(req.params.id,{},(err, result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/",(req,res)=>{
	let newMascota = new mascotas({
		nombre:req.body.nombre,
		raza:req.body.raza,
		edad:req.body.edad,
		especie:req.body.especie,
		sexo:req.body.sexo,
		peso:req.body.peso,
		propietario:req.body.propietario
	})

	newMascota.save((err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.put("/:id",(req,res)=>{	
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	let updateMascota = {
		nombre:req.body.nombre,
		raza:req.body.raza,
		edad:req.body.edad,
		especie:req.body.especie,
		sexo:req.body.sexo,
		peso:req.body.peso,
		propietario:req.body.propietario
	}

	mascotas.findByIdAndUpdate(req.params.id,{$set:updateMascota},{new:true},(err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.delete("/:id",(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	mascotas.findByIdAndRemove(req.params.id,(err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

/*
router.route("/getData").get(function(req, res) {
  productos.find({}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
*/
module.exports = router;