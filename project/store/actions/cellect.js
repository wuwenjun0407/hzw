/**
 * Created by Administrator on 2017/8/31.
 */
import * as types from "../action-types";
export default {
    changeCellect(item){
        return {type:types.CELLECT_ADD,cellect:item}
    },
    removeCollect(item){
        return {type:types.REMOVE_COLLECT,remove:item}
    }
}