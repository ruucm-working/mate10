import React from 'react';
import Title from './Title';
import Cards from './Cards';

const InfoBanner = ({children}) => {
  return <div>{children}</div>
}

InfoBanner.Title = Title;
InfoBanner.Cards = Cards;

export default InfoBanner;