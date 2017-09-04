/**
 * Created by Administrator on 2017/8/9.
 */
import * as types from "../action-types";
export default {
    changeTitle(title){
        return {type:types.CHANGE_TITLE,title}
    }
}