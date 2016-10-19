import React from 'react'

const Section = (props) => {
  return (
    <div className="section">
      <h2>{props.title}</h2>
      <div className="section-content">
        { props.children }
      </div>
    </div>
  )
}

export default Section
