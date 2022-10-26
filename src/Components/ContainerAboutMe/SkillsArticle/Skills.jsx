import React from 'react'



const Skills = ({title,array}) => {
  return (
    <article>
        <span>{title}</span>
        <ul>
            {array.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
    </article>


  )
}

export default Skills