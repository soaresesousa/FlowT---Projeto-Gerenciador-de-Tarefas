import React from 'react';

import '../styles/sidebar.css'
import type { TaskPriority, TaskStatus } from '../types';

interface Props {
  toggleModalOpen: () => void;
  filterStatus: TaskStatus | 'All';
  setFilterStatus: (s: TaskStatus | 'All') => void;
  filterPriority: TaskPriority | 'All';
  setFilterPriority: (p: TaskPriority | 'All') => void;
}

const Sidebar: React.FunctionComponent<Props> = ({toggleModalOpen, filterPriority,filterStatus,setFilterPriority,setFilterStatus}: Props) => {
  
  const handleFilter = (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.currentTarget.classList.contains('status-div')) {
      setFilterStatus(e.target.value)
      console.log(filterStatus)
      return;
    }
    setFilterPriority(e.target.value);
    console.log(filterPriority);
  }
  
  const clearFilters = () => {
    setFilterPriority('All');
    setFilterStatus('All');
  }
  
  return (
    <aside>
      <h2 className='header-title'>FlowT</h2>
        <button onClick={toggleModalOpen} >Adicionar task</button>
      <div className="filters">
        <h3>Filtros: </h3>
        
        <div className="filter-group" onClick={handleFilter}>
            <span className="priority-filter">Prioridade</span>
            <div className="filter-select priority-select">
              <button value={'All'}>
                Todas
              </button>
              <button value={'Alta'}>Alta</button>
              <button value={'Média'}>Média</button>
              <button value={'Baixa'}>Baixa</button>
            </div>
        </div>
      <div className="filter-group status-div" onClick={handleFilter}>
          <span className="status-filter">Status</span>
          <div className="filter-select status-select">
            <button value={'All'}>Todas</button>
            <button value={'DONE'}>Concluídas</button>
            <button value={'TODO'}>A fazer</button>
          </div>
      </div>
      <div className="filter-group">
          <button onClick={clearFilters} className='All-filter'>Limpar Filtros</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;