module.exports={
    menus:(req,res,next)=>{
        res.locals.menu="Middleware";
        next();
    }
}