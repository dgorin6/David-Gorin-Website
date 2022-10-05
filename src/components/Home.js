import React, { useState, useEffect } from 'react';
import { GlitchSpan } from './GlitchSpan'
export const Home = () => {
    const texts = ["who is David Gorin?", "Developer", "Problem Solver", "Engineer", "Team Player"];
    const[text, setText] = useState("Who is David Gorin?");
    const[index, setIndex] = useState(1);
    useEffect(() => {
        const step = setInterval(() => {     
           setText(texts[index]);
           setIndex((index + 1) % texts.length);
        }, 4000);
        return() => clearInterval(step);
    });
  return (
    <div className="main">
        <div className='home__buttons'>
          <button className='home__button' onClick = {() => {window.location.href = "/projects"}}>Projects<i className="fas fa-code"></i></button>
          <button  className='home__button' onClick = {() => {window.location.href = "/skills"}}>Skills<i className="fa fa-cogs" aria-hidden="true"></i></button>
          <button className='home__button' onClick = {() => {window.location.href = "/about"}}>About Me<i className="fa fa-user"></i></button>
        </div>
        <div className='glitch'>
        <GlitchSpan />
            {text}
        <GlitchSpan />
        </div>
    </div>
  )
}
