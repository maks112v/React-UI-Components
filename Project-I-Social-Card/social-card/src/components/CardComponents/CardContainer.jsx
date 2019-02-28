import React from 'react';
import './Card.css';

import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import Footer from '../FooterComponents/Footer';


function Card(){
  return(
    <div className="card">
      <HeaderContainer />
      <a href="https://www.reactjs.org">
      <div className="card-content">
        <CardBanner />
        <CardContent />
      </div>
      </a>
      <Footer />
    </div>
  );
}

export default Card;