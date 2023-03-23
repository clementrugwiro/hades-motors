const { Schema, model } = require("mongoose")
const { isEmail } = require("validator")

const schema = Schema({
    email:{
        type:String,
        required:[true,'please enter an email'],
        minlength:[6,'minimum length is 6 characters'],
        validate: [isEmail,'please enter a valid email']
},
pwd:{
        type:String,
        required:[true,'please enter a password'],
        minlength:[6,'minimum length is 6 characters']
}
})

module.exports = model("login", schema)