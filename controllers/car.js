const car =  require("../models/car.js");

const  carpost = async function (req,res){
    try{
    const acar = new car({
        carbrand : req.body.carbrand,
        carplate:req.body.carplate,
        ownerId: req.car.id,
        carmodel : req.body.carmodel,
        releaseyear : req.body.releaseyear,
        carcolor : req.body.carcolor,
        drivingroutine:req.body.drivingroutine
        
    })

 
    console.log(acar)
    await acar.save()
    res.status(201).json(acar)
   }
   catch(err){
    res.status(400).json(err)
    console.log(err)
   }
}

const carsget = async function (req,res){
    const cars = await car.find()
    res.send(cars)
}

const carget = async function (req,res){
    try{
        const acar = await car.findOne({ carplate: req.body.plate})
    res.send(acar)
    } catch{
        res.status(404)
        res.send({error: "car doesn't exist!"})
    }
}

const  carpatch = async function (req,res){
    try{
        const acar = await car.findOne({carplate: req.body.carplate})

        if(req.body.carcolor){
            acar.carcolor= req.body.carcolor
        }
        if(req.body.carplate){
            acar.carplate = req.body.carplate
        }
        if(req.body.drivingroutine){
            acar.drivingroutine = req.body.drivingroutine
        }

        await acar.save()
        res.send(acar)
    }
    catch{
        res.status(404)
        res.send({error:"user doesn't exist!!"})
    }
}

const  cardelete = async function(req,res){
    try{
        await car.deleteOne({carplate: req.body.plate})

        res.send("car deleted perfectly")
    }
    catch{
        res.status(404)
        res.send({error:"car doesn't exist!"})
    }
}

module.exports = {
    carpost,
    carsget,
    carget,
    carpatch,
    cardelete,
    carpatch
    // Add more functions here as needed
  };
  