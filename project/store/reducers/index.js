/**
 * Created by Administrator on 2017/8/9.
 */
import title from "./title";
import login from "./login";
import cellect from "./cellect";
import {combineReducers} from "redux";
let reducers=combineReducers({title,login,cellect});
export default reducers;