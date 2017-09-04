/**
 * Created by Administrator on 2017/8/9.
 */
import React,{Component} from "react"
import Header from "../../components/header/Header";
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Collect from "../../../store/actions/cellect";
 class collection extends Component{
    constructor(){
        super();
        this.state={list:[]}
    }
    componentDidMount(){
        let cellect=JSON.parse(localStorage.getItem("collect"));
        this.setState({list:cellect});
    }
    remove=(items)=>{
        let cellect=localStorage.getItem("collect");
        let collect=JSON.parse(cellect).filter(item=>item.id!==items.id);
        localStorage.setItem("collect",JSON.stringify(collect));
        this.setState({list:collect});
      // this.props.removeCollect(item);
    };
    render(){
        return(
            <div>
                <Header {...this.props} title="个人中心"/>
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
                                    <button onClick={()=>this.remove(item)}>取消</button>
                                </p>
                                <p className="introduction">
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
let mapStateToProps=state=>({
    collect:state.cellect
});
let mapDispatchToProps=dispatch=>bindActionCreators(Collect,dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(collection)