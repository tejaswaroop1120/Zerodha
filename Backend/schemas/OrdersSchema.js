const {Schema, default: mongoose} = require("mongoose");


const OrdersSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number
    },
    price:{
        type:Number
    },
    mode:{
        type:String
    }
});


module.exports = {OrdersSchema};