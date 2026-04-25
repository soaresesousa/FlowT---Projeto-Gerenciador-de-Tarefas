import React, {useState} from 'react';

import type { ITask, TaskPriority, TaskStatus,  } from '../types';
import "../styles/Form.css"
import {BsX} from 'react-icons/bs'

interface Props {
  toggleModalOpen: () => void;
  addNewTask: (task: ITask) => void;
}

const Form: React.FunctionComponent<Props> = ({toggleModalOpen, addNewTask}: Props) => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<TaskPriority>('MEDIUM');
  const [dueDate, setDueDate] = useState<string>('');

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

  const createTask = (e: React.SubmitEvent) => {
    e.preventDefault()
    if(!title.trim()){
      alert('Preencha os campos obrigatórios')
      return;
    }
    const taskToAdd: ITask = {
      title: title.trim(),
      id: generateId(),
      createdAt: new Date().toISOString(),
      priority,
      status: 'TODO',
      dueDate: dueDate || undefined,
      description: description.trim() || undefined
    }
    addNewTask(taskToAdd);
  }
  

  return (
    <div className="form-div">
      <div className="overlay"></div>
    <form action="" onSubmit={createTask}>
        <div className="form-header">
          <h2>Nova Task</h2>
          <button type='button' onClick={toggleModalOpen} className='closeModalBtn'>
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