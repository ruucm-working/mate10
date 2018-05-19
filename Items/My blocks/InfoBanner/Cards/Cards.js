import React from 'react'
import './Cards.scss'

const Cards = ({ children, className, ...other }) => {
  return (
    <div className="row grid-default-style">
      <div className="col-6">card 1<br/>text</div>
      <div className="col-6">card 2<br/>text</div>
    </div>
  )
  ;
}

export default Cards
