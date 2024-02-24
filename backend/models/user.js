const mongoose = require("mongoose");
const {Schema}=mongoose;
const passportLocalMongoose=require("passport-local-mongoose");

let userSchema= new Schema({
    email:{
        type: String,
        required: true, 
    },
    capacity: {
        type: Number,
        required: true,
    },
    fertilizers:[
        {
            type: Schema.Types.ObjectId,
            ref: "Stock"
        },
    ],
    seed:[
        {
            type: Schema.Types.ObjectId,
            ref: "Stock"
        },
    ],
    tools:[
        {
            type: Schema.Types.ObjectId,
            ref: "Tool"
        },
        
    ],
    
})

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",userSchema)