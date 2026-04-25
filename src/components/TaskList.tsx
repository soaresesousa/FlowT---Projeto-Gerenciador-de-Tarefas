import React from 'react';

import "../styles/TaskList.css"
import type { ITask } from '../types';
import { BsTrash } from 'react-icons/bs';

interface Props {
  taskList: ITask[];
  deleteTask: (id: string) => void;
}

const TaskList: React.FunctionComponent<Props> = ({taskList, deleteTask}: Props) => {

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
          <button onClick={() => deleteTask(task.id)} className='deleteBtn'><BsTrash /></button>
        </div>
      ))}   
    </div>
  );
};

export default TaskList;