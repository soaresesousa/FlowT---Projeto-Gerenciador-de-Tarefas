import React from 'react';

import '../styles/sidebar.css'

interface Props {
  toggleModalOpen: () => void;
}

const Sidebar: React.FunctionComponent<Props> = ({toggleModalOpen}: Props) => {
  
  return (
    <aside>
        <button onClick={toggleModalOpen} >Adicionar task</button>
      <div className="filters">
        <h3>Filtros: </h3>
        <div className="filter-group">
          <button className='All-filter'>Todas</button>
        </div>
        <div className="filter-group">
            <span className="priority-filter">Prioridade</span>
            <div className="filter-select priority-select">
              <button>Alta</button>
              <button>Média</button>
              <button>Baixa</button>
            </div>
        </div>
      <div className="filter-group">
          <span className="status-filter">Status</span>
          <div className="filter-select status-select">
            <button>Todas</button>
            <button>Concluídas</button>
            <button>A fazer</button>
          </div>
      </div>
      <div className="filter-group">
        <span className='dueDate-filter'>Prazo de entrega</span>
        <div className="filter-select dueDate-select">
          <button>Mais antigas</button>
          <button>Mais recentes</button>
        </div>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;