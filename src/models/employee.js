let mongoose = require("mongoose");

let empSchema = mongoose.Schema({

    name : {
        type: String,
        require: true
       },
    age : {
        type: Number,
        require: true
       },
    email : {
        type: String,
        default :  'default@email.com' 
    }
})

module.exports = {
    model : mongoose.model('employee',empSchema )
}