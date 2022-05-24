import React from 'react'
import  Card  from './Card'
import robo_img from "../Images/robojackets.jpg"
import vip_img from "../Images/VIP.PNG"
import website_img from "../Images/website.PNG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default class Projects extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            positions: [-1,0,1],
            left: true
        }
    }
    slideLeft() {
        for (let i = 0; i < this.state.positions.length; i++) {
            if (this.state.positions[i] == -1) {
                this.state.positions[i] = 1;
            } else {
                this.state.positions[i]--;
            }
        }
        this.setState({
            positions: this.state.positions,
            left: true
        })
    }
    slideRight() {
        for (let i = 0; i < this.state.positions.length; i++) {
            this.state.positions[i] = (this.state.positions[i] + 1) % this.state.positions.length;
        }
        this.setState({
            positions: this.state.positions,
            left: false
        })
    }
    updateAct(num) {
        let act = this.state.positions[num] > 0 ? "nextCard" : this.state.positions[num] === 0 ? "activeCard" : "prevCard"
        if (act == "activeCard") {
            if(this.state.left) {
                return ("activeCardLeft");
            } else {
                return ("activeCardRight");
            }
        } else {
            return act;
        }
    }
  render() {
    return (
        <div className='projects__main'>
            <div className='left__box'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={this.slideLeft.bind(this)}/> 
            </div>
            <div className='card__container'>
                <Card click = "https://github.com/RoboJackets/igvc-software" title = "Robojackets" image = {robo_img}
                desc = 'Competetive robotics team for autonomous vehicles. As a software team member, I wrote and debugged code for the robot Jessi, which competed in the IGVC (Intelligent Ground Vehicles Competition).'
                    tags ={<ul><li className='card__tags'>C++</li><li className='card__tags'>ROS</li><li className='card__tags'>Autonomous Systems</li></ul>} act = {this.updateAct(0)} onClick={this.slideRight.bind(this)} 
                />
                <Card title = "Vertically Integrated Projects - Research" image = {vip_img}
                desc = 'I performed research regarding the efficacy of roundabouts for traffic control using reinforcement learning. My work included debugging the reinforcement learning model and animating a trained model.'
                    tags ={<ul><li className='card__tags'>Python</li><li className='card__tags'>Tensorflow</li><li className='card__tags'>Matplotlib</li><li className='card__tags'>Reinforcement Learning</li></ul>} act = {this.updateAct(1)} 
                />
                <Card title = "This Website" image = {website_img}
                desc = 'This website was my first stab at Javascript/HTML/CSS. I originally made it with vanilla Javascript and CSS, but later refactored it to be a React app instead.'
                    tags ={<ul><li className='card__tags'>Javascript</li><li className='card__tags'>HTML</li><li className='card__tags'>CSS</li><li className='card__tags'>React.js</li></ul>} act = {this.updateAct(2)} 
                />
            </div>
            <div className='right__box'>
                <FontAwesomeIcon icon={faArrowRight} onClick={this.slideRight.bind(this)} /> 
            </div>
        </div>
      )
  }
}
