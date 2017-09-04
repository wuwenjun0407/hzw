/**
 * Created by Administrator on 2017/8/10.
 */
let mongoose=require("mongoose");
let conn=mongoose.createConnection("mongodb://127.0.0.1/data");
let UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
});

let User=conn.model("User",UserSchema);
exports.User=User;