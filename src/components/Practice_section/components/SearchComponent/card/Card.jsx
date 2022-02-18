import React from 'react';

import './card.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
        alt='a  monster'
      />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
      <p>{props.monster.website}</p>
    </div>
  );
};

export default Card;
