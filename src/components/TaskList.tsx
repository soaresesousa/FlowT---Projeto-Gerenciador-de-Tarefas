import React, { type SetStateAction } from 'react';

import "../styles/TaskList.css"
import type { ITask } from '../types';
import { BsTrash, BsPencil } from 'react-icons/bs';
import { isOverDueDate } from '../utils/isOverDueDate';

interface Props {
  taskList: ITask[];
  deleteTask: (id: string) => void;
  setTaskToUpdate: React.Dispatch<SetStateAction<ITask | undefined>>
  toggleModalOpen: () => void;
  handleStatus: (id: string) => void;
}

const TaskList: React.FunctionComponent<Props> = ({taskList, deleteTask, setTaskToUpdate, toggleModalOpen, handleStatus}: Props) => {
  
  if(taskList.length == 0) {
    return (
      <div className='taskList'>
        <h2>Nenhuma tarefa cadastrada ainda!</h2>
      </div>
    )};

  return (
    <div className='taskList'>
      {taskList.map((task) => (
        <div className={`
          task 
          ${task.status == "DONE" ? 'done' : ''} 
          priority-${task.priority.toLowerCase()} 
          ${isOverDueDate(task.dueDate) && task.status !== 'DONE' ? 'overDue' : '' } `} 
          key={task.id
        } >
          <div className="top-task">
            <p className='taskPriority'>{task.priority}</p>
            <p className='dueDate'>{task.dueDate ? `Prazo: ${new Date(task.dueDate).toLocaleDateString('pt-Br')}` : ''}</p>
          </div>
          <div className="middle-task">
            <p className='taskTitle'>{task.title}</p>
            <p className="description">{task.description ? `${task.description}` : ''}</p>
          </div>
          <div className="bottom-task">  
            <button onClick={() => deleteTask(task.id)} className='deleteBtn'><BsTrash /></button>
            <button className='editBtn' onClick={() => {
              setTaskToUpdate(task)
              toggleModalOpen()
              }} ><BsPencil /></button>
              <input onChange={() => handleStatus(task.id)} type="checkbox" name="" id="" />
          </div>
        </div>
      ))}   
    </div>
  );
};

export default TaskList;