import React from 'react'
import  Card  from './Card'
import robo_img from "../Images/robojackets.jpg"
import vip_img from "../Images/VIP.jpg"
import website_img from "../Images/website.jpg"
import abbvie from "../Images/abbvie.jpg"
import cnh from "../Images/cnh.jpg"
import atomz from '../Images/atomz.png'
import spotifai from "../Images/spotifai.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default class Projects extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            positions: [0,1,2,3,4,5],
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
                <Card click = "https://spotifai.net" title = "Spotifai" image = {spotifai}
                desc = {<>
                    <strong>Overview:</strong> Automatically add spotify playlists generated by GPT-3.5 to your spotify account.<br /><br />
                    <strong>Role:</strong> Creator<br /><br />
                    <strong>Tasks:</strong> Wrote a fullstack application using React and Node.js, deployed on AWS.<br /><br />
                    <strong>Click on the card for demo</strong>
                    </>}
                    tags ={<ul><li className='card__tags'>React.js</li><li className='card__tags'>Node.js</li><li className='card__tags'>AWS</li></ul>} act = {this.updateAct(0)} 
                />
                <Card click = "https://github.com/RoboJackets/igvc-software" title = "Robojackets" image = {robo_img}
                desc = {<>
                    <strong>Overview:</strong> Competitive robotics team for autonomous vehicles.
                    As a software team member, I wrote and debugged code for the robot Jessi,
                    which competed in the IGVC (Intelligent Ground Vehicles Competition).<br /><br />
                    <strong>Role:</strong> Software Team Member<br /><br />
                    <strong>Tasks:</strong> Worked on the simulator ran in gazebo<br /><br />
                    <strong>Click on the card for github</strong>
                    </>}
                    tags ={<ul><li className='card__tags'>C++</li><li className='card__tags'>ROS</li><li className='card__tags'>Autonomous Systems</li></ul>} act = {this.updateAct(1)} onClick={this.slideRight.bind(this)} 
                />
                <Card title = "Data Science Intern | AbbVie" image = {abbvie}
                desc = {<>
                    <strong>Overview:</strong> Worked on parameter optimization for an XGBoost Classification Model. Helped improve time efficiency of various feature enginneering functions. <br /><br />
                    <strong>Tasks:</strong> Rewrote a data processing script to make it run 1000% faster. Wrote a gradient descent algorithm to find optimal hyerparameters for predictive models. <br /><br />
                    </>}
                    tags ={<ul><li className='card__tags'>Python</li><li className='card__tags'>JupyterLab</li><li className='card__tags'>SQL</li><li className='card__tags'>Pandas</li></ul>} act = {this.updateAct(2)} 
                />
                <Card title = "Software Engineer Intern | CNH Industrial" image = {cnh}
                 desc = {<>
                    <strong>Overview:</strong> Developed a React based application for a support team of 50 people to view infrastructure KPI’s and create work tickets in Azure DevOps, reducing an hours long process to minutes. <br /><br />
                    <strong>Tasks:</strong> Created an accompanying microservice in .NET that allowed the application to access all required Azure DevOps services, providing data 
                    about 20 projects and streamlining ticket creation through a single entry point. Added application logging using Serilog and Azure Application Insights. <br /><br />
                    </>}    
                    tags ={<ul><li className='card__tags'>Azure</li><li className='card__tags'>.NET</li><li className='card__tags'>React.js</li></ul>} act = {this.updateAct(3)} 
                />
                <Card click = "https://atomz.herokuapp.com/" title = "Atomz: The Game" image = {atomz}
                desc = 'A game I made for fun using React.js, Node.js, and socket.io.  Click anywhere on the card to play!(friend required). Website contains github with implementation details.'
                    tags ={<ul><li className='card__tags'>React.js</li><li className='card__tags'>Node.js</li><li className='card__tags'>Socket.io</li></ul>} act = {this.updateAct(4)} 
                />
                <Card click = "https://github.com/dgorin6/David-Gorin-Website" title = "This Website" image = {website_img}
                desc = 'This website was my first stab at Javascript/HTML/CSS. I originally made it with vanilla Javascript and CSS, but later refactored it to be a React app instead. Click on the card for more github and README.'
                    tags ={<ul><li className='card__tags'>Javascript</li><li className='card__tags'>HTML</li><li className='card__tags'>CSS</li><li className='card__tags'>React.js</li></ul>} act = {this.updateAct(5)} 
                />
            </div>
            <div className='right__box' style = {{opacity: this.state.rightBoxActive}}>
                <FontAwesomeIcon icon={faArrowRight} onClick={this.slideRight.bind(this)} /> 
            </div>
        </div>
      )
  }
}
