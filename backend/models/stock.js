const mongoose = require("mongoose");
const {Schema}=mongoose;
const passportLocalMongoose=require("passport-local-mongoose");

let stockSchema= new Schema({
    lifeSpan:{
        type: Number,
        required: true,
    }
});

module.exports=mongoose.model("Stock",stockSchema)