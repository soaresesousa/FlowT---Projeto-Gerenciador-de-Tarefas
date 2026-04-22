import React from 'react';

import '../styles/sidebar.css'

const Sidebar: React.FunctionComponent = () => {
  return (
    <aside>
        <button>Adicionar task</button>
        <select name="" id="">
            <option value="">Prioridade</option>
            <option value="">prazo</option>
            <option value="">dificuldade</option>
        </select>
    </aside>
  );
};

export default Sidebar;
