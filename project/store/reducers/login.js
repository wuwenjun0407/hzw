/**
 * Created by Administrator on 2017/8/10.
 */
let initState={username:"",avatar:""};
import * as types from "../action-types";
export default function (state=initState,action) {
    switch (action.type){
        case types.LOGIN_CHANGE:
            return action.login;
        default:
            return state
    }
}