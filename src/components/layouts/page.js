import React from 'react'

const Page = (props) => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>{ props.title }</h1>
      </div>
      <div className="page-content">
        { props.children }
      </div>
    </div>
  )
}

export default Page
