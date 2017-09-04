/**
 * Created by Administrator on 2017/8/31.
 */
let initState=[];
import * as types from "../action-types";
export default function (state=initState,action) {
    switch (action.type){
        case types.CELLECT_ADD:
            console.log(action.cellect);
            if(initState.some(item=>item.id==action.cellect.id)){
                return initState;
            }else {
                initState.unshift(action.cellect);
                localStorage.setItem("collect",JSON.stringify(initState));
            }
             return initState;
        case types.REMOVE_COLLECT:

            initState=initState.filter(item=>item.id!==action.remove.id);
           console.log(initState);
            return initState;
        default:
            return state
    }
}