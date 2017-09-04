/**
 * Created by Administrator on 2017/8/10.
 */
let express=require("express");
let router=express.Router();
let multer=require("multer");
let upload=multer({dest:"./public"});
let {User}=require("../module");
router.use(function(req, res, next){
    if( req.session.user){
        req.session.user.time =new Date().toLocaleString();
        req.session.touch();
        next();
    }else {
        next();
    }
});
router.get('/test',function (req, res) {
    // console.log('req.session.user');
    // console.log(req.session);
    // console.log(1);
    if(req.session.user){
        res.send(req.session.user);
        // console.log(2);
    }else {
        res.send({username:"",avatar:""});
        // console.log(3);
    }
});
router.get("/delete",function (req,res) {
    if(req.session.user){
        console.log(req.session.user);
        req.session.user={username:"",avatar:""};
        res.send(req.session.user)
    }else {

    }
});

router.post("/signup",upload.single("avatar"),function (req,res) {
    let user=req.body;
    // console.log(user);
    // console.log(req.file);
    console.log(user);
    user.avatar!==""?user.avatar=`/${req.file.filename}`:"";
    User.findOne({username:user.username},function (err,result) {
        if(err){
            res.send(err);
        }else if(result){
            res.send({})
        }else{
            User.create(user,function (err,result) {
                if(err){
                    res.send(err);
                }else {
                    console.log(result);
                    res.send(result);
                }
            })
        }
    })
});

router.post("/signin",function (req,res) {
    console.log(1);
    let user = req.body;
    let{username,password}=user;
    User.findOne({username,password},function (err,result) {
        if(err){
            // console.log(2);
            res.send(err);
        }else if(result){
            // console.log(result);
            result.avatar = 'http://localhost:8081'+ result.avatar;
            let {username,avatar}=result;
            req.session.user={username,avatar};
            res.send(result);
        }else {
            res.send("")
        }
    })
});













module.exports=router;