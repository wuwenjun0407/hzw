/**
 * Created by Administrator on 2017/8/8.
 */
import React,{Component} from 'react';
import bg from "../../images/8.jpg"
import Header from "../../components/header/Header";
// import "../login/login.less"
export default class register extends Component{
    constructor(){
        super()
    }
    //验证用户名
    handleUserName=(e)=>{
        e.preventDefault();
        if(/^[\u4e00-\u9fa5_a-zA-Z0-9_][\u4e00-\u9fa5_a-zA-Z0-9_]{1,5}[\u4e00-\u9fa5_a-zA-Z0-9_]$/.test(this.refs.username.value)){
            console.log(9);
        }else {
            console.log(6);
            this.refs.username.value = "用户名格式不正确";
            this.refs.username.style.color = "red";
            setTimeout(() => {
                this.refs.username.value = "";
                this.refs.username.style.color = "#8B7D7B";
            }, 1500);
            return;
        }
    };
    //验证手机号码
    checkTel=(e)=>{
        e.preventDefault();
        if (!/^1[3|5|8|4|7]\d{9}/.test(this.refs.tel.value)) {
            this.refs.tel.value = "请输入正确的手机号";
            this.refs.tel.style.color = "red";
            setTimeout(() => {
                this.refs.tel.value = "";
            }, 1500);
            return;
        }
    };
    //验证密码
    checkPassword=(e)=>{
        e.preventDefault();
        clearTimeout(this.timer);
        if(!/[a-zA-Z0-9]{8,12}/.test(this.refs.password.value)){
            this.refs.notice.style.display="block";
            this.refs.password.value="";
            this.refs.password.placeholder="";
            this.timer=setTimeout(() => {
                this.refs.notice.style.display="none";
                this.refs.password.placeholder="密码必须是8-12位数字或字母";
            }, 1500);
           return;
        }
    };
    //提交注册
    handleSubmit=(e)=> {
        e.preventDefault();
      /*  if(this.refs.username.value===""){
            this.refs.username.value="内容不能为空！";
            this.refs.username.style.color="red";
            return;
        }else if(this.refs.password.value===""){
            this.refs.password.value="内容不能为空！";
            this.refs.username.style.color="red";
            return;
        }else if(this.refs.tel.value===""){
            this.refs.tel.value="内容不能为空！";
            this.refs.tel.style.color="red";
            return;
        }*/
        let xhr = new XMLHttpRequest();
        xhr.open('post', "http://localhost:8081/user/signup", true);
        xhr.responseType = 'json';
        let formData = new FormData();
        formData.append("username", this.refs.username.value);
        formData.append("password", this.refs.password.value);
        formData.append("tel", this.refs.tel.value);
        this.refs.avatar.files[0]?formData.append("avatar", this.refs.avatar.files[0]): formData.append("avatar", "");
        xhr.onload = (res) => {
            console.log(res);
            if (res) {
                console.log(res);
                this.props.history.push("/signin");
            }
        };
        xhr.send(formData)
    }
      ;
    render(){
        return(
            <div>
                <Header {...this.props} title="个人中心"/>
            <div className="content">
                <div className="bg">
                    <img src={bg} alt=""/>
                </div>
                <form   onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="username">
                        <label>用户名</label>
                        <input onBlur={(e)=>this.handleUserName(e)} autoComplete="off" ref="username" name="username" required  type="text" placeholder="用户名必须是3-6位汉字，数字，字母"/>
                        <span className="glyphicon glyphicon-user"></span>
                    </div>
                    <div className="password">
                        <label>密码</label>
                        <div className="pass">
                            <input  onBlur={(e)=>this.checkPassword(e)} ref="password" name="password" required type="password" placeholder="密码必须是8-12位数字或字母"/>
                            <span className="notice" ref="notice">密码格式不正确</span>
                        </div>
                        <span className="glyphicon glyphicon-lock"></span>
                    </div>
                    <div className="password">
                        <label>手机号</label>
                        <input autoComplete="off" onBlur={(e)=>this.checkTel(e)}  name="tel" ref="tel" required type="text" placeholder="请输入手机号"/>
                        <span className="glyphicon glyphicon-phone"></span>
                    </div>
                    <div className="file">
                        <label>头像</label>
                        <input className="avatar"  ref="avatar" name="avatar" type="file"/>
                        <span><i>*</i>非必填项</span>
                    </div>
                    <div className="btn">
                        <input type="submit" value="注册"/>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}