/**
 * Created by Administrator on 2017/8/9.
 */

import React,{Component} from "react"
import Header from "../../components/header/Header";

export default class setting extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <Header {...this.props} title="个人中心"/>
            </div>
        )

    }
}