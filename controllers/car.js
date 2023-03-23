const car =  require("../models/car.js");

const  carpost = async function (req,res){
    try{
    const acar = new car({
        carbrand : req.body.carbrand,
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

module.exports = {
    carpost,
    // Add more functions here as needed
  };
  