/**
 * Created by Administrator on 2017/8/8.
 */
let path=require("path");
let HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./app/index.js",
    output:{
        filename: "build.js",
        path:path.resolve("./dist")
    },
    devtool: 'source-map',
    module: {
        rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.(jpg|png|gif|jpeg)$/,use:"url-loader?limit=8192"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./app/index.html"
        })
    ]
};