
import React,{Component} from "react"
import "./edition.less"
import bg from "../../images/5.jpg";
import Header from "../../components/header/Header";
export default class edition extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Header {...this.props} title="个人中心"/>
            <div className="content">
                <div className="bg"><img src={bg}/></div>
                <ul>
                    <li>当前版本：1.1</li>
                    <li>作 者：输入作者（或修改者）名字</li>
                    <li>完成日期：2001年7月20日</li>
                    <li>Copyright (c) 2001,上海贝尔有限公司网络应用事业部</li>
                </ul>
            </div>
            </div>

        )
    }
}