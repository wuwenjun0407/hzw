/**
 * Created by Administrator on 2017/8/8.
 */
/**
 * Created by Administrator on 2017/8/8.
 */
/**
 * Created by Administrator on 2017/8/8.
 */

import React,{Component} from 'react';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import title from "../../../store/actions/title";
import {bindActionCreators} from "redux"
import "./header.less"

 class Header extends Component{
    constructor(){
        super();
    }
    handleClick=()=>{
        this.props.history.goBack();
    };
    render(){
        return(
            <div className="header">
                <div className="title">
                    <span className="arrow" onClick={this.handleClick}>&lt;</span>
                    <span className="signIn"><Link to="/person"><span>{this.props.login}</span></Link></span>
                    <span className="index">{this.props.title}</span>
                </div>
            </div>
        )
    }
}
let mapStateToProps=(state)=>({
    login:state.login.username
});
let mapDispatchToProps=dispatch=>bindActionCreators(title,dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)