const {Schema, model} = require('mongoose')


const schema = Schema({
    carbrand: {
            type:String,
            required:[true,'please enter a firstname'],
            minlength:[6,'minimum length is 6 characters']
    },
    carmodel :{
            type:String,
            required:[true,'please enter a lastname'],
    },
    releaseyear : {
            type:String,
            required:[true,'please enter a username'],
    },
    carcolor:{
            type:String,
            unique:true,
            required:[true,'please enter an email'],
   
    },
    drivingroutine:{
            type:String,
            required:[true,'please enter a password'],
    }

})

module.exports = model("car",schema)