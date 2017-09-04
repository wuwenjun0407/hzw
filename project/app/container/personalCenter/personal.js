/**
 * Created by Administrator on 2017/8/8.
 */
/**
 * Created by Administrator on 2017/8/8.
 */
import React, {Component} from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Login from "../../../store/actions/login";
import Header from "../../components/header/Header";
import {ajax} from "../../AJAX/index";
import "./personal.less"
import bg from "../../images/8.jpg"
 class personalCenter extends Component {
    constructor() {
        super()
    }
componentDidMount(){

}
handleClick=(e)=>{
    e.preventDefault();
    // this.props.changeLogin({username:"",avatar:""});
    ajax({
        url:"http://localhost:8081/user/delete",
        method:"get"
    }).then(res=>{
        // console.log(res);
        res=JSON.parse(res);
        this.props.changeLogin(res);
    }).catch(err=>{
        console.log(err);
    })
};
    render() {
        console.log(bg);
        console.log(this.props.login.avatar);
        return (
            <div>
                <Header {...this.props} title="个人中心"/>
        <div className="content">
                <ul className="center-setting">
                    <li>
                        {this.props.login.username!==""?<Link to="/setting"><div className="bgLi"><div className="bg"><img src={this.props.login.avatar!=="http://localhost:8081"?this.props.login.avatar:bg}/></div><p>{this.props.login.username}</p></div></Link>:<Link to="/signin"><p className="login">请登录</p></Link>}
                    </li>
                    <li><Link to="/setting"><span className="glyphicon glyphicon-cog left"></span>个人设置<span className="right">&gt;</span></Link></li>
                    <li><Link to="/collection"><span className="glyphicon glyphicon-heart left"></span>我的收藏<span className="right">&gt;</span></Link></li>
                    <li><Link to="/system"><span className="glyphicon glyphicon-wrench left"></span>系统设置<span className="right">&gt;</span></Link></li>
                    <li><Link to="/edition"><span className="glyphicon glyphicon-file left"></span>版本信息<span className="right">&gt;</span></Link></li>
                    <button onClick={(e)=>this.handleClick(e)}>退出登录</button>
                </ul>
            </div>
            </div>
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
)(personalCenter)