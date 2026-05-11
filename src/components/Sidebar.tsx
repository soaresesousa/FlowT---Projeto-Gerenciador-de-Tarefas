import React from 'react';

import '../styles/sidebar.css'
import type { TaskPriority, TaskStatus } from '../types';

interface Props {
  toggleModalOpen: () => void;
  filterStatus: TaskStatus | 'All';
  setFilterStatus: (s: TaskStatus | 'All') => void;
  filterPriority: TaskPriority | 'All';
  setFilterPriority: (p: TaskPriority | 'All') => void;
  filterDueDate: 'Recentes' | 'Antigas' | 'All';
  setFilterDueDate: (d: 'Recentes' | 'Antigas' | 'All') => void;
}

const Sidebar: React.FunctionComponent<Props> = ({toggleModalOpen, filterDueDate, filterPriority,filterStatus,setFilterDueDate,setFilterPriority,setFilterStatus}: Props) => {
  
  const handleFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    /* setFilterStatus(status) */
    console.log(e.target.value)
  }
  
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
      <div className="filter-group" onClick={handleFilter}>
          <span className="status-filter">Status</span>
          <div className="filter-select status-select">
            <button value={'All'}>Todas</button>
            <button value={'DONE'}>Concluídas</button>
            <button value={'TODO'}>A fazer</button>
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