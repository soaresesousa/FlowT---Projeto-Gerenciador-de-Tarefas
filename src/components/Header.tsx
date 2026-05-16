import React from 'react';

import '../styles/Header.css'
import { BiSolidUser } from 'react-icons/bi';

const Header: React.FunctionComponent = () => {

  
  return <div className='header'>
    
    <div className="search-nav">
      <input
      className='search-title'
       type="text" placeholder='Busque por título...' />
    </div>
    <div className="img-user">
      <BiSolidUser />
    </div>
  </div>;
};

export default Header;