import React from 'react';

import '../styles/Header.css'
import { BsPlus } from 'react-icons/bs';

const Header: React.FunctionComponent = () => {

  
  return <div className='header'>
    
    <div className="search-nav">
      <input type="text" placeholder='Busque por título...' />
    </div>
    <button><BsPlus/></button>
  </div>;
};

export default Header;