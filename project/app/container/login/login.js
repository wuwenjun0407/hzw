import React, {Component} from 'react';
import bg from "../../images/8.jpg"
import {Link} from "react-router-dom"
import {ajax} from "../../AJAX/index";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Login from "../../../store/actions/login";
import "./login.less"
import Header from "../../components/header/Header";
 class login extends Component {
    constructor() {
        super()
    }
    componentDidMount(){
         this.flag=false;
    }
     handleFocus=(e)=>{
         console.log(3);
         e.preventDefault();
         if(!this.flag){
             this.refs.Prompt.innerHTML="";
         }
     };
     handleSubmit=(e)=>{
        let user={
            username:this.refs.username.value,
            password:this.refs.password.value,
        };
        ajax({
            url:"http://localhost:8081/user/signin",
            method:"post",
            data:user,
        }).then(res=>{
            console.log(res);
            if(res){
                res=JSON.parse(res);
                let {username,avatar}=res;
                this.props.changeLogin({username,avatar});
                this.props.history.push("/");
            }else {
                this.refs.Prompt.innerHTML="用户名或者密码不正确，请重新输入！";
                this.refs.username.value="";
                this.refs.password.value="";
            }
        }).catch(err=>{
            console.log(err);
        })
};
    render() {
        return (
            <div>
                <Header {...this.props} title="个人中心"/>
           <div className="content">
               <div className="bg">
                   <img src={bg} alt=""/>
               </div>
               <form onSubmit={(e)=>this.handleSubmit(e)}>
                   <div className="username">
                       <label>用户名</label>
                       <input autoComplete="off" onFocus={(e)=>this.handleFocus(e)} ref="username" required type="text" placeholder="请输入用户名"/>
                       <span className="glyphicon glyphicon-user"></span>
                   </div>
                   <div className="password">
                       <label>密码</label>
                       <input onFocus={(e)=>this.handleFocus(e)} ref="password" required type="password" placeholder="请输入密码" />
                       <span className="glyphicon glyphicon-lock"></span>
                   </div>
                   <div className="Verification">
                       <div className="empty"></div>
                       <div ref="Prompt"></div>
                   </div>
                   <div className="btn">
                       <input type="submit" value="登录"  />
                       <p className="signup"><Link to="/signup">请注册</Link></p>
                   </div>
               </form>
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
)(login)