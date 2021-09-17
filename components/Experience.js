import React from 'react'

const Experience = ({job}) => {
    const {name,from,to,description} = job
    return (
        <li>
        <h3>{name}</h3>
        <h5>{from}-{to}</h5>
        <p>{description}</p>
      </li>
    )
}

export default Experience
