const advert =  require("../models/advert.js");

const  advertpost = async function (req,res){
    try{
    // Convert the input date string to a Date object
    const inputDate = new Date(req.body.startdate);

    // Add 30 days to the input date
    const endDate = new Date(inputDate);
    endDate.setDate(endDate.getDate() + 30);

    const aadvert = new advert({
        title:req.body.title,
        carplate:req.body.carplate,
        location: req.body.location,
        description: req.body.description,
        //format of date should be YYYY-MM-DD
        startdate : req.body.startdate,
        enddate : endDate,
        payment:req.body.payment,
        
    })

 
    console.log(aadvert)
    await aadvert.save()
    res.status(201).json(aadvert)
   }
   catch(err){
    res.status(400).json(err)
    console.log(err)
   }
}

const advertsget = async function (req,res){
    const adverts = await advert.find()
    res.send(adverts)
}

const advertget = async function (req,res){
    try{
        const aadvert = await advert.findOne({ carplate: req.body.carplate})
    res.send(aadvert)
    } catch{
        res.status(404)
        res.send({error: "advert doesn't exist!"})
    }
}

const  advertpatch = async function (req,res){
    try{
        const aadvert = await advert.findOne({advertplate: req.body.advertplate})

        if(req.body.enddate){
            aadvert.enddate= req.body.enddate
        }
        if(req.body.advertplate){
            aadvert.advertplate = req.body.advertplate
        }
        if(req.body.payment){
            aadvert.payment = req.body.payment
        }

        await aadvert.save()
        res.send(aadvert)
    }
    catch{
        res.status(404)
        res.send({error:"user doesn't exist!!"})
    }
}

const  advertdelete = async function(req,res){
    try{
        await advert.deleteOne({advertplate: req.body.plate})

        res.send("advert deleted perfectly")
    }
    catch{
        res.status(404)
        res.send({error:"advert doesn't exist!"})
    }
}

module.exports = {
    advertpost,
    advertsget,
    advertget,
    advertpatch,
    advertdelete,
    advertpatch
    // Add more functions here as needed
  };
  