/**
 * Created by Administrator on 2017/8/8.
 */
import React from "react";
import ReactDOM from "react-dom";
import Wrap from "./container/wrap/Wrap";
import store from "../store/index"
import {Provider} from "react-redux"
import "./css/index.less"
import "./fontSize/index"
// import "/node_modules/bootstrap/dist/css/bootstrap.css"
ReactDOM.render(
    <Provider store={store}>
    <Wrap/>
    </Provider>
    ,document.querySelector("#root"));