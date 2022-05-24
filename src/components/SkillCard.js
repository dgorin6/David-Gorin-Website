import React from 'react'

function SkillCard({title,tags}) {
  return (
    <div className = "skills__card">
            <div className='skills__title'>{title}</div>
            <div className="tags">{tags}</div>
      </div>
  )
}

export default SkillCard