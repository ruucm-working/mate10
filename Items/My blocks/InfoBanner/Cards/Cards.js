import React from 'react'
import './Cards.scss';

const Cards = ({ children, className, ...other }) => {
  return (
    <div className="row grid-default-style">
      <div className="col-6 info-banner-cards">
      <div className="font-size-20">card1</div>
      <div className="font-size-14">text</div></div>
      <div className="col-6 info-banner-cardsa">
      <div className="font-size-20">card2</div>
      <div className="font-size-14">text</div></div>
    </div>
  )
  ;
}

export default Cards
