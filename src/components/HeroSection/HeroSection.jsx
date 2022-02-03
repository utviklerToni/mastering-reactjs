import React from 'react';

import ferryIllustration from '../../assets/transportation _ ship, cruise.png';

const HeroSection = () => {
  return (
    <div className='container d-flex'>
      <div className='hero-text-container d-flex'>
        <h1> Join us in our adventure among the beautiful Fjord</h1>
      </div>
      <div className='d-flex ferry-image'>
        <img src={ferryIllustration} alt={`A ferry in the ocean`} />
      </div>
    </div>
  );
};

export default HeroSection;
