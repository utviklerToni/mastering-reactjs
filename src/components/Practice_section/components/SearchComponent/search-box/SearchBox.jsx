import React from 'react';

import './search-style.css';

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    type='search'
    placeholder='Search Crew Memebers'
    onChange={handleChange}
    className={'search'}
  />
);

export default SearchBox;
