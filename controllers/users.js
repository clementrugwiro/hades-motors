const User =  require("../models/user.js");
const {} = require ('dotenv/config')
const {compare} = require("bcrypt")
const {sign} = require("jsonwebtoken")


const handleLoginErrors=(err)=>{
    // console.log(err.message,err.code);
    let errors={
        email:'',
        pwd:''
    }
    if(err.code===11000){
        errors.email=" that email is already registered"
    }

    if(err.message.includes("login validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path]=properties.message
        
        })
    }
    return errors
}

const usersget = async function (req,res){
    const users = await User.find()
    res.send(users)
}

const userget = async function (req,res){
    try{
        const auser = await User.findOne({ _id: req.params.id})
    res.send(auser)
    } catch{
        res.status(404)
        res.send({error: "user doesn't exist!"})
    }
}

const  userpost = async function (req,res){
    try{
    const auser = new User({
        firstname: req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        email    : req.body.email,
        pwd : req.body.pwd
    })

 
    console.log(auser)
    await auser.save()
    res.status(201).json(auser)
   }
   catch(err){
    res.status(400).json(err)
    console.log(err)
   }
}

const  userlogin = async function (req,res){
    try{
        const uasers = await User.find()
        // console.log(uasers)
        const auser = uasers.find(User=>User.email===req.body.email)
        // console.log(auser)
        if(!auser){
            return res.status(400).send("couldn't find the user")
        }
        if (await compare(req.body.pwd, auser.pwd)){
            
            const useremail = req.body.email
            const userId = auser.id
            const userRole = auser.role
            const user = { email: useremail,id: userId,role:userRole}
            const accesstoken = sign(user, process.env.ACCESS_TOKEN_SECRET, )
            console.log(accesstoken)
            res.status(200).json({accesstoken:accesstoken,user:user})
            console.log(user)
           
        }
        else{
            res.send("doesn't match")
        }
        // await auser.save()
       }
       catch(err){
        const errors = handleLoginErrors(err);
        res.status(400).json(errors)
       }
    
       
    }

const  userpatch = async function (req,res){
    try{
        const auser = await User.findOne({_id: req.params.id})

        if(req.body.firstname){
            auser.firstname= req.body.firstname
        }
        if(req.body.lastname){
            auser.lastname = req.body.lastname
        }
        if(req.body.username){
            auser.username = req.body.username
        }

        await auser.save()
        res.send(auser)
    }
    catch{
        res.status(404)
        res.send({error:"user doesn't exist!!"})
    }
}

const  userdelete = async function(req,res){
    try{
        await User.deleteOne({_id: req.params.id})

        res.send("user deleted perfectly")
    }
    catch{
        res.status(404)
        res.send({error:"user doesn't exist!"})
    }
}

module.exports = {
    userpost,
    userget,
    usersget,
    userlogin,
    userpatch,
    userdelete
    // Add more functions here as needed
  };
  