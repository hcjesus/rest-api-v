const express = require("express");
const router = express.Router();
const {citas} = require("../models/citasModel");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/",(req,res)=>{
	citas.find({},(err, result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/",(req,res)=>{
	let newCita = new citas({
		propietario:req.body.propietario,
		mascota:req.body.mascota,
		fecha:req.body.fecha,
		hora:req.body.hora,
		sintomas:req.body.sintomas		
	})

	newCita.save((err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.put("/:id",(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	let updateCita = {
		propietario:req.body.propietario,
		mascota:req.body.mascota,
		fecha:req.body.fecha,
		hora:req.body.hora,
		sintomas:req.body.sintomas
	}

	citas.findByIdAndUpdate(req.params.id,{$set:updateCita},{new:true},(err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.delete("/:id",(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	citas.findByIdAndRemove(req.params.id,(err,result)=>{
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