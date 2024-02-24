if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}   

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let cors=require("cors");
let passport=require("passport")

app.use(express.urlencoded({ extended: true }));

const dbUrl = process.env.ATLASDB_URL;
const mongoose = require("mongoose");
main().then((res) => {
    console.log("connection established");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(dbUrl);
}

const session=require("express-session");
const MongoStore = require('connect-mongo');

let store=MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 60*60*3,
});

store.on("error",()=>{
    console.log("ERROR IN MONGO SESSION STORE",err);
})

let sessionOptions={
    store,      
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized:true,
    cookie: {
        expires: Date.now()+ 1000*60*60*24*3,
        maxAge: 1000*60*60*24*3,
        secure: false,
    }
}
app.use(session(sessionOptions));


app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: process.env.FRONTEND_URL,

    method: "GET, POST, PUT, DELETE",
    credentials: true
}))

// require("./config/passport.js");

app.post("/login",passport.authenticate("local",{
    failureRedirect:"/login",
    failureFlash: true,
    }),
    (req,res)=>{
    let {username,password} =req.body;
    console.log(req.body);

    res.send("hello");
})

app.listen(3000, () => {
    console.log("app running on 3000");
})