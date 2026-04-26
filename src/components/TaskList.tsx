import React, { type SetStateAction } from 'react';

import "../styles/TaskList.css"
import type { ITask } from '../types';
import { BsTrash, BsPencil } from 'react-icons/bs';

interface Props {
  taskList: ITask[];
  deleteTask: (id: string) => void;
  setTaskToUpdate: React.Dispatch<SetStateAction<ITask | undefined>>
  toggleModalOpen: () => void;
}

const TaskList: React.FunctionComponent<Props> = ({taskList, deleteTask, setTaskToUpdate, toggleModalOpen}: Props) => {

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
          <button className='editBtn' onClick={() => {
            setTaskToUpdate(task)
            toggleModalOpen()
            }} ><BsPencil /></button>
        </div>
      ))}   
    </div>
  );
};

export default TaskList;