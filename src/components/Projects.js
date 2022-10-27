import React from 'react'
import  Card  from './Card'
import robo_img from "../Images/robojackets.jpg"
import vip_img from "../Images/VIP.jpg"
import website_img from "../Images/website.jpg"
import abbvie from "../Images/abbvie.jpg"
import atomz from '../Images/atomz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default class Projects extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            positions: [0,1,2,3,4],
            left: true,
            leftBoxActive: 0,
            rightBoxActive: 1
        }
    }
    updateBoxes() {
        if (this.state.positions[0] == 0) {
            this.setState ({
                leftBoxActive: 0,
                rightBoxActive: 1
            })
        } else if(this.state.positions[this.state.positions.length - 1] == 0)  {
            this.setState ({
                leftBoxActive: 1,
                rightBoxActive: 0
            })
        } else {
            this.setState ({
                leftBoxActive: 1,
                rightBoxActive: 1
            })
        }
    }
    slideLeft() {
        if (this.state.leftBoxActive) {
            for (let i = 0; i < this.state.positions.length; i++) {
                this.state.positions[i]++;
            }
            this.setState({
                positions: this.state.positions,
                left: true
            })
            this.updateBoxes();
        }
    }
    slideRight() {
        if (this.state.rightBoxActive){
            for (let i = 0; i < this.state.positions.length; i++) {
                this.state.positions[i]--;
            }
            this.setState({
                positions: this.state.positions,
                left: false
            })
            this.updateBoxes();
        }
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
            <div className='left__box' style = {{opacity: this.state.leftBoxActive}}>
                <FontAwesomeIcon icon={faArrowLeft} onClick={this.slideLeft.bind(this)}/> 
            </div>
            <div className='card__container'>
                <Card click = "https://github.com/RoboJackets/igvc-software" title = "Robojackets" image = {robo_img}
                desc = 'Competetive robotics team for autonomous vehicles. As a software team member, I wrote and debugged code for the robot Jessi, which competed in the IGVC (Intelligent Ground Vehicles Competition). Click on the card for github'
                    tags ={<ul><li className='card__tags'>C++</li><li className='card__tags'>ROS</li><li className='card__tags'>Autonomous Systems</li></ul>} act = {this.updateAct(0)} onClick={this.slideRight.bind(this)} 
                />
                <Card title = "Data Science Intern | AbbVie" image = {abbvie}
                desc = 'Worked on parameter optimization for an XGBoost Classification Model. Helped improve time efficiency of various feature enginneering functions.'
                    tags ={<ul><li className='card__tags'>Python</li><li className='card__tags'>JupyterLab</li><li className='card__tags'>SQL</li><li className='card__tags'>Pandas</li></ul>} act = {this.updateAct(1)} 
                />
                <Card title = "Vertically Integrated Projects - Research" image = {vip_img}
                desc = 'I performed research regarding the efficacy of roundabouts for traffic control using reinforcement learning. My work included debugging the reinforcement learning model and animating a trained model.'
                    tags ={<ul><li className='card__tags'>Python</li><li className='card__tags'>Tensorflow</li><li className='card__tags'>Matplotlib</li><li className='card__tags'>Reinforcement Learning</li></ul>} act = {this.updateAct(2)} 
                />
                <Card click = "https://atomz.herokuapp.com/" title = "Atomz: The Game" image = {atomz}
                desc = 'A game I made for fun using React.js, Node.js, and socket.io.  Click anywhere on the card to play!(friend required)'
                    tags ={<ul><li className='card__tags'>React.js</li><li className='card__tags'>Node.js</li><li className='card__tags'>Socket.io</li></ul>} act = {this.updateAct(3)} 
                />
                <Card click = "https://github.com/dgorin6/David-Gorin-Website" title = "This Website" image = {website_img}
                desc = 'This website was my first stab at Javascript/HTML/CSS. I originally made it with vanilla Javascript and CSS, but later refactored it to be a React app instead. Click on the card for github.'
                    tags ={<ul><li className='card__tags'>Javascript</li><li className='card__tags'>HTML</li><li className='card__tags'>CSS</li><li className='card__tags'>React.js</li></ul>} act = {this.updateAct(4)} 
                />
            </div>
            <div className='right__box' style = {{opacity: this.state.rightBoxActive}}>
                <FontAwesomeIcon icon={faArrowRight} onClick={this.slideRight.bind(this)} /> 
            </div>
        </div>
      )
  }
}
