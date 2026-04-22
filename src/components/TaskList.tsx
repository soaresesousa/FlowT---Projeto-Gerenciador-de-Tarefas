import React from 'react';

import "../styles/TaskList.css"
import type { ITask } from '../types';

interface Props {
  taskList: ITask[];
}

const TaskList: React.FunctionComponent<Props> = ({taskList}: Props) => {

  if(taskList.length == 0) {
    return (
      <div className='taskList'>
        <h2>Nenhuma tarefa cadastrada ainda!</h2>
      </div>
    )};

  return (
    <div className='taskList'>
      {taskList.map((task) => (
        <div className="task" key={task.id} >
          <p>{task.title}</p>
          <p className="description">{task.description ? `Descrição: ${task.description}` : ''}</p>
          <p>Prioridade: {task.priority}</p>
          <p>{task.dueDate ? `Prazo de entrega: ${task.dueDate}` : ''}</p>
        </div>
      ))}        
    </div>
  );
};

export default TaskList;