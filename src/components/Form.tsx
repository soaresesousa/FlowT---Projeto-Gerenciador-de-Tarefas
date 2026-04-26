import React, {useState} from 'react';

import type { ITask, TaskPriority, TaskStatus,  } from '../types';
import "../styles/Form.css"
import {BsX} from 'react-icons/bs'

interface Props {
  toggleModalOpen: () => void;
  addNewTask?: (task: ITask) => void;
  taskToUpdate: ITask | undefined;
  setTaskToUpdate: React.Dispatch<React.SetStateAction<ITask | undefined>>
}

const Form: React.FunctionComponent<Props> = ({toggleModalOpen, addNewTask, taskToUpdate, setTaskToUpdate}: Props) => {
  
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<TaskPriority>('MEDIUM');
  const [dueDate, setDueDate] = useState<string>('');

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name;
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

  const handleTask = (e: React.SubmitEvent) => {
    e.preventDefault()

    if(taskToUpdate) {
      
    }
    
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
    if(addNewTask) addNewTask(taskToAdd);
  }
  

  return (
    <div className="form-div">
      <div className="overlay"></div>
    <form action="" onSubmit={handleTask}>
        <div className="form-header">
          <h2>{taskToUpdate ? "Editar" : "Nova Task"}</h2>
          <button type='button' onClick={() => {
            toggleModalOpen()
            if(taskToUpdate)setTaskToUpdate(undefined)
            }} className='closeModalBtn'>
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
              <option>Média</option>
              <option>Baixa</option>
              <option>Alta</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="dueDate">Prazo de entrega <span>(opcional)</span></label>
          <input name='dueDate' type="date" onChange={handleField} />
        </div>
        <button type='submit' className='addTaskBtn'>{taskToUpdate ? "Salvar" : "Criar Task" }</button>
    </form>
    </div>
  );
};

export default Form;