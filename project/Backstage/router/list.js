/**
 * Created by Administrator on 2017/8/12.
 */
let express=require("express");
let router=express.Router();
let {User}=require("../module");
let list=require("../data/dataBase");
router.get("/data",function (req,res) {
    res.send(JSON.stringify(list));
});
router.post("/remove",function (req,res) {
    let user=req.body;
 /*    list=list.filter(item=>item.id!==user.id);
    res.send(JSON.stringify(list));*/
});






module.exports=router;