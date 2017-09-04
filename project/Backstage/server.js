/**
 * Created by Administrator on 2017/8/10.
 */
let express=require("express");
let path=require("path");
let flash=require("connect-flash");
let app=express();
let session=require("express-session");
let user=require("./router/user");
let list=require("./router/list");
let bodyParser=require("body-parser");
let MongoStore = require('connect-mongo')(session);

app.use(express.static(path.resolve("node_modules")));
app.use(express.static(path.resolve("public")));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
app.use(bodyParser.json());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"hzw",
    cookie:{
        maxAge: ""
    },
    store:new MongoStore({
        url:"mongodb://127.0.0.1/data"
    })
}));
app.use("/list",list);
app.use("/user",user);
app.listen(8081);