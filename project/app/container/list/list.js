/**
 * Created by Administrator on 2017/8/8.
 */

import React, {Component} from 'react';
import Header from "../../components/header/Header";
import {ajax} from "../../AJAX/index";
import {Link} from  "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import Collect from "../../../store/actions/cellect";
import "./list.less";
 class list extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    cellect=(item)=>{
        console.log(item);
        this.props.changeCellect(item);
        console.log(this.refs.collect);
        this.props.history.push("/collection")
    };
    info=(item)=>{
        let ary=[];
        ary.push(item);
      localStorage.setItem("user",JSON.stringify(ary));
    };
    componentDidMount() {
        ajax({
            url: "http://localhost:8081/list/data",
            method: "get"
        }).then(res => {
            this.setState({
                list: JSON.parse(res)
            });
            localStorage.setItem("cellect",res);
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Header {...this.props} title="列表"/>
                <ul className="content list">
                    {this.state.list.map((item, index) => (
                        <li key={index}>
                            <div className="pic">
                                <img src={item.img}/>
                            </div>
                            <div className="introduce">
                                <p className="username">
                                    <span ><i>姓名：</i>{item.username}</span>
                                    <span><i>年龄：</i>{item.age}</span>
                                </p>
                                <p className="money">
                                    <span><i>赏金：</i>{item.money}</span>
                                    <span><i>恶魔果实：</i>{item.fruit}</span>
                                </p>
                                <p className="button">
                                    <button onClick={()=>this.cellect(item)}>收藏</button>
                                </p>
                                <p className="introduction">
                                    <Link to="/introduction">
                                        <span onClick={()=>this.info(item)}> 详情 ></span>
                                    </Link>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="loading">
                    没有更多数据了...
                </div>
            </div>
        )
    }
}
let mapStateToProps=state=>({});
 let mapDispatchToProps=dispatch=>bindActionCreators(Collect,dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(list)