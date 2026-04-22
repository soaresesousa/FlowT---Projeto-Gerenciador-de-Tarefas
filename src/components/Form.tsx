import React, {useState} from 'react';

import type { ITask, TaskPriority, TaskStatus,  } from '../types';
import "../styles/Form.css"
import {BsX} from 'react-icons/bs'

interface Props {
  toggleModalOpen: () => void;
  addNewTask: (task: ITask) => void;
  status: TaskStatus;
}

const Form: React.FunctionComponent<Props> = ({toggleModalOpen, addNewTask, status}: Props) => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string | null>(null);
  const [priority, setPriority] = useState<TaskPriority>('MEDIUM');
  const [dueDate, setDueDate] = useState<string | null>(null);

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name;
    console.log( fieldName)
    switch (fieldName) {
      case 'title':
        setTitle(e.target.value)
        console.log(title)
        break
      case 'description':
        setDescription(e.target.value)
        console.log(description)
        break
      case 'dueDate':
        setDueDate(e.target.value)
        console.log(dueDate)
        break
      case 'priority':
        setPriority((e.target.value) as TaskPriority)
        console.log(priority)
        break
    }
  }

  const generateId = () => {
    return crypto.randomUUID();
  }

  const createTask = () => {
    const taskToAdd: ITask = {
      title,
      id: generateId(),
      createdAt: new Date().toISOString(),
      priority,
      status,
      dueDate: dueDate ? dueDate : undefined,
      description: description ? description : undefined
    }
    addNewTask(taskToAdd);
  }
  

  return (
    <div className="form-div">
      <div className="overlay"></div>
    <form action="" onSubmit={createTask}>
        <div className="form-header">
          <h2>Nova Task</h2>
          <button onClick={toggleModalOpen} className='closeModalBtn'>
            <BsX />
          </button>
        </div>
        <div className="input-field">
          <label htmlFor="title">Título:</label>
          <input type="text" name='title' onChange={handleField} />
        </div>
        <div className="input-field">
          <label htmlFor="description">Descrição <span>(opcional)</span></label>
          <textarea name="description" onChange={handleField}></textarea>
        </div>
        <div className="input-field">
          <label htmlFor="priority">Prioridade:</label>
          <select name="priority" onChange={handleField}>
              <option value="MEDIUM">Média</option>
              <option value="LOW">Baixa</option>
              <option value="HIGH">Alta</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="dueDate">Prazo de entrega <span>(opcional)</span></label>
          <input name='dueDate' type="date" onChange={handleField} />
        </div>
        <button type='submit' className='addTaskBtn'>Criar Task</button>
    </form>
    </div>
  );
};

export default Form;