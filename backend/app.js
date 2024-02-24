if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}   

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let cors=require("cors");

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

app.use(cors({
    origin: process.env.FRONTEND_URL,
    method: "GET, POST, PUT, DELETE",
    credentials: true
}))

app.get("/login",(req,res)=>{
    res.send("hellooo");
})

app.listen(3000, () => {
    console.log("app running on 3000");
})