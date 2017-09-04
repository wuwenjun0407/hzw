/**
 * Created by Administrator on 2017/8/12.
 */
import React,{Component} from "react";
import Header from "../../components/header/Header"
import "./introduction.less"
export default class introduction extends Component{
    constructor(){
        super();
        this.state={info:[]};
    }
    componentDidMount(){
        this.setState({info:JSON.parse(localStorage.getItem("user"))});
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <Header {...this.props} title="简介"/>
                {
                    this.state.info.map((item,index)=>(
                        <div key={index} className="content">
                            <img className="user" src={item.img}/>
                            <p className="username">姓名：{item.username}</p>
                            <p className="age">年龄：{item.age}</p>
                            <p className="money">悬赏金：{item.money}</p>
                            <p className="fruit">恶魔果实：{item.fruit}</p>
                            <div className="introduction">技能：{item.introduction}</div>
                        </div>
                    ))
                }
                </div>
        )
    }
}