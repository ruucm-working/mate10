import React from 'react'
import './Cards.scss';

const Cards = ({ children, className, ...other }) => {
  return (
    <div className="row grid-default-style">
      <div className="col-6 info-banner-cards">card1<br/>text</div>
      <div className="col-6 info-banner-cardsa">card2<br/>text</div>
    </div>
  )
  ;
}

export default Cards
