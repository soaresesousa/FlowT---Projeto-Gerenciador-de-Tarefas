import React from 'react';

import '../styles/sidebar.css'

interface Props {
  toggleModalOpen: () => void;
}

const Sidebar: React.FunctionComponent<Props> = ({toggleModalOpen}: Props) => {
  
  return (
    <aside>
        <button onClick={toggleModalOpen} >Adicionar task</button>
        <select name="" id="">
            <option value="">Prioridade</option>
            <option value="">prazo</option>
            <option value="">dificuldade</option>
        </select>
    </aside>
  );
};

export default Sidebar;
