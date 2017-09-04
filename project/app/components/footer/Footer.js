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
import {Link} from "react-router-dom"
import "./footer.less"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import title from "../../../store/actions/title"
 class Footer extends Component{
    constructor(){
        super()
    }
    handleTitle=(title)=>{
        this.props.changeTitle(title)
    };
    render(){
        return(
            <ul className="footer">
                <li className="footer-item" onClick={()=>this.handleTitle("首页")}>
                    <Link to="/">
                    <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                    <span className="footer-text">首页</span>
                </Link>
                </li>
                <li className="footer-item" onClick={()=>this.handleTitle("列表")}>
                    <Link to="/list">
                        <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                        <span className="footer-text">列表</span>
                    </Link>
                </li>
                <li className="footer-item" onClick={()=>this.handleTitle("资讯")}>
                    <Link to="/show">
                        <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
                        <span className="footer-text">资讯</span>
                    </Link>
                </li>
                <li className="footer-item" onClick={()=>this.handleTitle("个人中心")}>
                    <Link to="/person">
                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        <span className="footer-text">个人中心</span>
                    </Link>
                </li>
            </ul>
        )
    }
}
let mapStateToProps=state=>({});
let mapDispatchToProps=dispatch=>bindActionCreators(title,dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)