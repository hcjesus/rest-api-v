const express = require("express");
const router = express.Router();
const {vacunas} = require("../models/vacunasModel");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/",(req,res)=>{
	vacunas.find({},(err, result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.get("/:id",(req,res)=>{
	vacunas.findById(req.params.id,{},(err, result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/",(req,res)=>{
	let newVacuna = new vacunas({
		idmascota:req.body.idmascota,
		rabia:{
			aplicacion1:req.body.rabia.aplicacion1,
			aplicacion2:req.body.rabia.aplicacion1,
			aplicacion3:req.body.rabia.aplicacion1,
			aplicacion4:req.body.rabia.aplicacion1,
			aplicacion5:req.body.rabia.aplicacion1,
		},
		moquillo:{
			aplicacion1:req.body.moquillo.aplicacion1,
			aplicacion2:req.body.moquillo.aplicacion1,
			aplicacion3:req.body.moquillo.aplicacion1,
			aplicacion4:req.body.moquillo.aplicacion1,
			aplicacion5:req.body.moquillo.aplicacion1,
		},
		hepatitis:{
			aplicacion1:req.body.hepatitis.aplicacion1,
			aplicacion2:req.body.hepatitis.aplicacion1,
			aplicacion3:req.body.hepatitis.aplicacion1,
			aplicacion4:req.body.hepatitis.aplicacion1,
			aplicacion5:req.body.hepatitis.aplicacion1,
		},
		parvovirus:{
			aplicacion1:req.body.parvovirus.aplicacion1,
			aplicacion2:req.body.parvovirus.aplicacion1,
			aplicacion3:req.body.parvovirus.aplicacion1,
			aplicacion4:req.body.parvovirus.aplicacion1,
			aplicacion5:req.body.parvovirus.aplicacion1,
		},		
	})

	newVacuna.save((err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.put("/:id",(req,res)=>{	
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	let updateVacuna = {
		rabia:{
			aplicacion1:req.body.rabia.aplicacion1,
			aplicacion2:req.body.rabia.aplicacion1,
			aplicacion3:req.body.rabia.aplicacion1,
			aplicacion4:req.body.rabia.aplicacion1,
			aplicacion5:req.body.rabia.aplicacion1,
		},
		moquillo:{
			aplicacion1:req.body.moquillo.aplicacion1,
			aplicacion2:req.body.moquillo.aplicacion1,
			aplicacion3:req.body.moquillo.aplicacion1,
			aplicacion4:req.body.moquillo.aplicacion1,
			aplicacion5:req.body.moquillo.aplicacion1,
		},
		hepatitis:{
			aplicacion1:req.body.hepatitis.aplicacion1,
			aplicacion2:req.body.hepatitis.aplicacion1,
			aplicacion3:req.body.hepatitis.aplicacion1,
			aplicacion4:req.body.hepatitis.aplicacion1,
			aplicacion5:req.body.hepatitis.aplicacion1,
		},
		parvovirus:{
			aplicacion1:req.body.parvovirus.aplicacion1,
			aplicacion2:req.body.parvovirus.aplicacion1,
			aplicacion3:req.body.parvovirus.aplicacion1,
			aplicacion4:req.body.parvovirus.aplicacion1,
			aplicacion5:req.body.parvovirus.aplicacion1,
		}
	}

	vacunas.findByIdAndUpdate(req.params.id,{$set:updateVacuna},{new:true},(err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.delete("/:id",(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	vacunas.findByIdAndRemove(req.params.id,(err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

module.exports = router;