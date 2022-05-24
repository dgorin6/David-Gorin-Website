import React from 'react'
import Card from './Card'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <div className = "skills__main">
        <SkillCard title = "Languages" tags = {<ul><li className='skills__tags'>Java - Proficient</li><li className='skills__tags'>C++ - Intermediate</li><li className='skills__tags'>Javascript - Intermediate</li><li className='skills__tags'>Python - Intermediate</li></ul>} />
        <SkillCard title = "Libraries/Frameworks" tags = {<ul><li className='skills__tags'>React.js</li><li className='skills__tags'>ROS(Robot Operating Systems)</li><li className='skills__tags'>JUnit</li><li className='skills__tags'>Matplotlib</li></ul>} />
        <SkillCard title = "Platforms" tags = {<ul><li className='skills__tags'>Windows</li><li className='skills__tags'>Linux</li></ul>} />
        <SkillCard title = "Development Tools" tags = {<ul><li className='skills__tags'>Visual Studio Code</li><li className='skills__tags'>IntelliJ</li><li className='skills__tags'>Git</li></ul>} />
        <SkillCard title = "Concepts" tags = {<ul><li className='skills__tags'>Object Oriented Design</li><li className='skills__tags'>Data Structures & Algorithms</li></ul>} />
    </div>
  )
}

export default Skills
