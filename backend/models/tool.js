const mongoose = require("mongoose");
const {Schema}=mongoose;
const passportLocalMongoose=require("passport-local-mongoose");

let toolSchema= new Schema({
    resource:{
        
    }
});

module.exports=mongoose.model("Tool",toolSchema)