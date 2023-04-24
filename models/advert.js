const {Schema, model} = require('mongoose')


const schema = Schema({
        title:{
                type:String,
                required:[true,'please enter a firstname'],
              
        },
        carplate:{
                type:String,
                required:[true,'please enter a firstname'],
        },
        description: {
                type:String,
                required:[true,'please enter a firstname'],
        },
        location :{
                type:String,
                required:[true,'please enter a lastname'],
        },
        startdate : {
                type:String,
                required:[true,'please enter a username'],
        },
        enddate:{
                type:String,
                required:[true,'please enter an email'],
        
        },
        payment:{
                type:String,
                required:[true,'please enter a password'],
        }

})

module.exports = model("advert",schema)