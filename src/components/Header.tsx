import React from 'react';

import { BsSearch } from 'react-icons/bs';

import '../styles/Header.css'

const Header: React.FunctionComponent = () => {
  return <div className='header'>
    <h2 className='heaader-title'>FlowT</h2>
    <nav>
        <a href="#">Todas as tasks</a>
        <a href="#">Concluídas</a>
        <a href="#">pendentes</a>
        <input type="text" placeholder='Busque por título...' />
        <BsSearch />
    </nav>
    <select name="filter" id="filter">
        <option value="prioridade">Prioridade</option>
        <option value="date">Data</option>
    </select>
  </div>;
};

export default Header;