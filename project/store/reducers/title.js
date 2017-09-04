/**
 * Created by Administrator on 2017/8/9.
 */
let initState="首页";
import * as types from "../action-types";
export default function (state=initState,action) {
    switch (action.type){
        case types.CHANGE_TITLE:
            return action.title;
        default:
            return state
    }
}