/**
 * Created by Administrator on 2017/8/8.
 */
import React, {Component} from 'react';
import {HashRouter as Router, Route, Link, Switch} from "react-router-dom"
import $ from 'jquery';
import {ajax} from "../../AJAX/index";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Login from "../../../store/actions/login";


// 公用组件引用
import Footer from "../../components/footer/Footer";
// 非公用组件
import Index from "../index/index";
import List from "../list/list";
import Show from "../show/show";
import PersonalCenter from "../personalCenter/personal";
import Sign from "../../container/login/login"
import Siup from "../../container/signup/signup"
//二级组件
import Collection from "../../component/collection/collection";
import Setting from "../../component/setting/setting";
import System from "../../component/system/system";
import Edition from "../../component/edition/edition";
import Introduction from "../../component/introduction/introduction"

 class Wrap extends Component {
    constructor() {
        super()
    }
componentDidMount(){
        ajax({
            url:"http://localhost:8081/user/test",
            method:"get"
        }).then(res=>{
            console.log(38,res);
            let {username,avatar}=JSON.parse(res);
            this.props.changeLogin({username,avatar});
        },e=>{
            console.log(e);
        });
}
    render() {
        return (
            <Router>
                <div>
                <div className="app-container">
                    <Switch>
                        <Route path="/" exact component={Index}/>
                        <Route path="/list" component={List}/>
                        <Route path="/show" component={Show}/>
                        <Route path="/person" component={PersonalCenter}/>
                        <Route path="/signin" component={Sign}/>
                        <Route path="/signup" component={Siup}/>
                        <Route path="/setting" component={Setting}/>
                        <Route path="/collection" component={Collection}/>
                        <Route path="/system" component={System}/>
                        <Route path="/edition" component={Edition}/>
                        <Route path="/introduction" component={Introduction}/>
                    </Switch>
                    <Footer/>
                </div>
                </div>
            </Router>
        )
    }
}
let mapStateToProps=state=>({
    login:state.login
});
let mapDispatchToProps=dispatch=>bindActionCreators(Login,dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wrap)