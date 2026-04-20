import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { BsSearch, BsMoon, BsSun } from 'react-icons/bs';

import '../styles/Header.css'

const Header: React.FunctionComponent = () => {

  const {theme, toggleTheme} = useTheme();
  
  return <div className='header'>
    <h2 className='header-title'>FlowT</h2>
    <nav className='header-nav'>
        <a href="#">Todas <span>8</span></a>
        <a href="#">Concluídas <span>5</span></a>
        <a href="#">pendentes <span>3</span></a>
        <input type="text" placeholder='Busque por título...' />
        <BsSearch />
    </nav>
    <div className="right-header">
      <select name="filter" id="filter">
          <option value="prioridade">Prioridade</option>
          <option value="date">Data</option>
      </select>
      <button onClick={toggleTheme} >{theme == "dark" ? <BsSun /> : <BsMoon />}</button>
    </div>
  </div>;
};

export default Header;