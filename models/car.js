const {Schema, model} = require('mongoose')


const schema = Schema({
        carplate:{
                type:String,
                unique:true,
                required:[true,'please enter a firstname'],
                minlength:[5,'minimum length is 5 characters']
        },
        ownerId:{
                type:String,
                required:[true,'please enter a firstname'],
                minlength:[5,'minimum length is 5 characters']
        },
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
                required:[true,'please enter an email'],
        
        },
        drivingroutine:{
                type:String,
                required:[true,'please enter a password'],
        }

})

module.exports = model("car",schema)