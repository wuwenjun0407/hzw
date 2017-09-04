/**
 * Created by Administrator on 2017/8/10.
 */
import * as types from "../action-types";
export default {
    changeLogin(loginObj){
        return {type:types.LOGIN_CHANGE,login:loginObj}
    }
}