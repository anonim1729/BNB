const ExpressErr=require("./utilities/expressError.js");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        if(req.method=="GET"){
            req.session.redirectUrl=req.originalUrl;
        }
        req.flash("error","Please Login to Continue");
        return res.redirect("/login");
    }
    next();
}
