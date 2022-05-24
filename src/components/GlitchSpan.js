import React, { useState, useEffect } from 'react';
export const GlitchSpan = () => {
    const texts = ["who is David Gorin?", "Developer", "Problem Solver", "Engineer", "Team Player"];
    const[text, setText] = useState("Who is David Gorin?");
    const[index, setIndex] = useState(1);
    useEffect(() => {
        const step = setInterval(() => {     
           setText(texts[index]);
           setIndex((index + 1) % texts.length);
           console.log(text);
        }, 4000);
        return() => clearInterval(step);
    });
    return (
        <span aria-hidden="true">{text}</span>
    )
}
