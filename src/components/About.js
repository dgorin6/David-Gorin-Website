
import React from 'react'
import about_img from "../Images/about.png";
import pdf from "../Images/DavidGorinResume.pdf";

function About() {
  return (
    <div className='about__main'>
        <h1 className='about__body'>
        <div className='left__body'> <img src = {about_img} className = "about__image"></img></div>
            <div className='right__body'>
                <div className='about__title'>About Me</div>
                <p className='about__p'>
                    I am a software developer and student at the Georgia Institute of Technology.
                    Some of my interests include AI, robotics, and machine learning. I am very curious and always looking for someting new to learn.
                    In fact, I designed this website because I was interested in learning React.js. 

                </p>
                <div className='extracurr'>
                    <div className='about__title'> Some Things I Do in my Freetime</div>
                    <ul>
                        <li className='about__p'>Water Polo (2020 Illinois State Champions)</li>
                        <li className='about__p'>Volunteer at Animal Shelter (I love dogs)</li>
                        <li className='about__p'>Basketball (watch, not play)</li>
                    </ul>
                </div>
                <a href={pdf}>
                    <div className = "resume">
                        <div className='resume__title'>My Resume</div>
                        <i class="fa fa-download" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
            </h1>
        <h2 className='contact__me'>
            Contact Me
            <div className = "email">davidgorin03@gmail.com<i class="fa fa-envelope" aria-hidden="true"></i></div>
            <a href = "https://www.linkedin.com/in/david-gorin-181476221/" className='linkedIn'>LinkedIn<i class = "fab fa-linkedin-in"></i></a>
        </h2>
    </div>
  )
}

export default About