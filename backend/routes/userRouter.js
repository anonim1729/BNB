const express=require("express");
const router=express.Router();

const asyncWrap = require("../utilities/asyncWrap.js");

const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares.js");



router.route("/signup")
.get((req,res)=>{
    res.render("users/signUp.ejs");
})
.post(async(req,res)=>{
    try{
        let {username, email, password}=req.body;
        let newUser= new User({
            username,email
        });
        let registeredUser=await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            
            res.redirect("/listings");
        })
    } catch(e){
        
        res.redirect("/signup");
    }
})

router.route("/login")
.get((req,res)=>{
    res.render("users/login.ejs");
})
.post( 
    passport.authenticate("local",{
        failureRedirect:"/login",
        // failureFlash: true,
    }),
    async(req,res)=>{
       
        if(res.locals.redirectUrl){
            return res.redirect(res.locals.redirectUrl);
        }
        res.redirect("/listings");
    }
)

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        
        res.redirect("/listings");
    });
});

module.exports=router;