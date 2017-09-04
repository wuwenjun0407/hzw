/**
 * Created by Administrator on 2017/8/8.
 */
import React,{Component} from 'react';
import Header from "../../components/header/Header";

export default class show extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Header {...this.props} title="资讯"/>
            </div>
        )
    }
}