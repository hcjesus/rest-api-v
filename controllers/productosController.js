const express = require("express");
const router = express.Router();
const {productos} = require("../models/productosModel");
const ObjectId = require("mongoose").Types.ObjectId;

router.get("/",(req,res)=>{
	productos.find({},(err, result)=> {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/",(req,res)=>{
	let newProduct = new productos({
		nombre:req.body.nombre,
		descripcion:req.body.descripcion,
		marca:req.body.marca,
		categoria:req.body.categoria,
		precio:req.body.precio
	})

	newProduct.save((err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.put("/:id",(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	let updateProducto = {
		nombre:req.body.nombre,
		descripcion:req.body.descripcion,
		marca:req.body.marca,
		categoria:req.body.categoria,
		precio:req.body.precio
	}

	productos.findByIdAndUpdate(req.params.id,{$set:updateProducto},{new:true},(err,result)=>{
		if(!err) res.send(result)
		else console.log("error: ", err)
	})
});

router.delete("/:id",(req,res)=>{
	if(!ObjectId.isValid(req.params.id))
		return res.status(400).send("no valid: ",req.params.id)

	productos.findByIdAndRemove(req.params.id,(err,result)=>{
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