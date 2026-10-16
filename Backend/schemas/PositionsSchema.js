const {Schema, default: mongoose} = require("mongoose");


const PositionsSchema = new Schema({
    product:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number
    },
    avg:{
        type:Number
    },
    price:{
        type:Number
    },
    net:{
        type:String
    },
    day:{
        type:String
    },
    isLoss:{
        type:Boolean
    }
});


module.exports = {PositionsSchema};