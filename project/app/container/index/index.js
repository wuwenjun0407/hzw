/**
 * Created by Administrator on 2017/8/8.
 */
/**
 * Created by Administrator on 2017/8/8.
 */

import React, {Component} from 'react';
import Swiper from "../../components/Swiper/Swiper";
import Header from "../../components/header/Header"


export default class index extends Component {
    constructor() {
        super()
    }
    render() {  
        console.log(this.props);
        return (
            <div>
                <Header {...this.props} title="首页"/>
        <div className="content">
               <Swiper/>
                <div className="info">

                </div>
            </div>
            </div>
        )
    }
}