if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}   

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let cors=require("cors");
let passport=require("passport");
const LocalStrategy=require("passport-local");

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")))

app.use(express.urlencoded({ extended: true }));

const methodOverride=require("method-override");
app.use(methodOverride("_method"));

const engine=require("ejs-mate");
app.engine("ejs",engine);

const dbUrl = process.env.ATLASDB_URL;
const mongoose = require("mongoose");
main().then((res) => {
    console.log("connection established");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect(dbUrl);
    // await mongoose.connect("mongodb://127.0.0.1:27017/cma");
}

const asyncWrap=require("./utilities/asyncWrap.js");
const ExpressErr=require("./utilities/expressError.js");

let User=require("./models/user");

const session=require("express-session");
const MongoStore = require('connect-mongo');

let userRouter =require("./routes/userRouter.js");

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
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    
    res.locals.currUser= req.user;
    next();
});


app.use(cors({
    origin: process.env.FRONTEND_URL,

    method: "GET, POST, PUT, DELETE",
    credentials: true
}))

app.use("/",userRouter);
///


  app.get("/",(req,res)=>{
    res.render("home.ejs");
  })

  app.get("/login",(req,res)=>{
    res.render("login.ejs");
  })

// app.post("/login",passport.authenticate("local",{
//     failureRedirect:"/login",
//     }),
//     (req,res)=>{
//     let {username,password} =req.body;
//     console.log(req.body);

//     res.send("hello");
// })

app.get("/login/success",(req,res)=>{
    if(req.user){
        res.status(200).json({
            success:true,
            user: req.user,
        });
    }
})

app.post("/register",async(req,res,next)=>{
    try{
        let {username, email, password}=req.body;
        
        let newUser= new User({
            username,email
        });
        let registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
           
            res.send("///");
        })
    } catch(e){
        console.log(e);
        res.send(e);
    }
})

app.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.send('logged out');
    });
  });


  ///
  app.all("*",(req,res,next)=>{
    let err= new ExpressErr(404,"Page not found");
    next(err);
})

app.use((err, req, res, next)=>{
    console.log(err);
    let {statusCode=500, message="something went wrong"}= err;
    res.status(statusCode).render("error.ejs",{message});
});

app.listen(3000, () => {
    console.log("app running on 3000");
})