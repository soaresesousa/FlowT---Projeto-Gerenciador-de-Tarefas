import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { BsSearch, BsMoon, BsSun } from 'react-icons/bs';

import '../styles/Header.css'

const Header: React.FunctionComponent = () => {

  const {theme, toggleTheme} = useTheme();
  
  return <div className='header'>
    
    <nav className='header-nav'>
        <a href="#">Todas <span>8</span></a>
        <a href="#">Concluídas <span>5</span></a>
        <a href="#">pendentes <span>3</span></a>
        
    </nav>
    
    <div className="right-header">
      <input type="text" placeholder='Busque por título...' />
        <BsSearch />
      <button onClick={toggleTheme} >{theme == "dark" ? <BsSun /> : <BsMoon />}</button>
    </div>
  </div>;
};

export default Header;