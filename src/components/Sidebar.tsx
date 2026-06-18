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

  const clearFilters = () => {
    setFilterPriority('All');
    setFilterStatus('All');
  }

  const priorityOptions: Array<{ label: string; value: TaskPriority | 'All' }> = [
    { label: 'Todas', value: 'All' },
    { label: 'Alta', value: 'Alta' },
    { label: 'Média', value: 'Média' },
    { label: 'Baixa', value: 'Baixa' },
  ];

  const statusOptions: Array<{ label: string; value: TaskStatus | 'All' }> = [
    { label: 'Todas', value: 'All' },
    { label: 'Concluídas', value: 'DONE' },
    { label: 'A fazer', value: 'TODO' },
  ];
  
  return (
    <aside>
      <h2 className='header-title'>FlowT</h2>
        <button className='addTaskBtn' onClick={toggleModalOpen} >Adicionar task</button>
      <div className="filters">
        <h3>Filtros: </h3>

        <div className="filter-group">
            <span className="priority-filter">Prioridade</span>
            <div className="filter-select priority-select">
              {priorityOptions.map((option) => (
                <button
                  key={option.value}
                  type='button'
                  className={filterPriority === option.value ? 'active' : ''}
                  onClick={() => setFilterPriority(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
        </div>
      <div className="filter-group status-div">
          <span className="status-filter">Status</span>
          <div className="filter-select status-select">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                type='button'
                className={filterStatus === option.value ? 'active' : ''}
                onClick={() => setFilterStatus(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
      </div>
      <div className="filter-group">
          <button type='button' onClick={clearFilters} className='All-filter'>Limpar Filtros</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;