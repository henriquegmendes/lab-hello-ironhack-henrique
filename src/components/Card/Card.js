import React from 'react';

import './Card.css';

import Header from '../Header/Header';

const Card = ({ imagePath, imageName, cardTitle, description }) => {
  return (
    <div className="card-container">
      <img src={imagePath} alt={imageName}/>
      <Header type="h3" text={cardTitle} />
      {/* <h3>{cardTitle}</h3> */}
      <p>{description}</p>
    </div>
  );
};

export default Card;
