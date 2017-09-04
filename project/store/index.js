/**
 * Created by Administrator on 2017/8/9.
 */
import React from "react";
import {createStore} from "redux"
import reducers from "./reducers"
let store=createStore(reducers);
window.store=store;
export default store;