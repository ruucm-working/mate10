import React from 'react'
import './Cards.scss'

const Cards = ({ children, className, ...other }) => {
  return (
    <div className="row grid-default-style">
      <div className="col-6">column 01</div>
      <div className="col-6">column 02</div>
    </div>
  )
  ;
}

export default Cards
