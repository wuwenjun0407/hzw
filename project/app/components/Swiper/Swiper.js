import React,{Component} from "react";
import ReactSwipe from 'react-swipe';
import Slider1 from "../../images/1.jpg"
import Slider2 from "../../images/2.jpg"
import Slider3 from "../../images/3.jpg"
import "./swiper.less"
export default class Swiper extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="banner">
                <ReactSwipe className="carousel" swipeOptions={{
                    continuous: true,
                    startSlide: 2,
                    speed: 400,
                    auto: 1000,
                }}>
                    <div><img src={Slider1}/></div>
                    <div><img src={Slider2}/></div>
                    <div><img src={Slider3}/></div>
                </ReactSwipe>
            </div>
        )
    }
}