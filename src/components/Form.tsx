import React, {useState, useEffect} from 'react';

import type { ITask, TaskPriority, TaskStatus,  } from '../types';
import "../styles/Form.css"
import {BsX} from 'react-icons/bs'

interface Props {
  toggleModalOpen: () => void;
  addNewTask?: (task: ITask) => void;
  taskToUpdate: ITask | undefined;
  setTaskToUpdate: React.Dispatch<React.SetStateAction<ITask | undefined>>
  editTask?: (task: ITask) => void;
}

const Form: React.FunctionComponent<Props> = ({toggleModalOpen, addNewTask, taskToUpdate, setTaskToUpdate, editTask}: Props) => {
  
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<TaskPriority>('Média');
  const [dueDate, setDueDate] = useState<string>('');

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name;
    switch (fieldName) {
      case 'title':
        setTitle(e.target.value)
        break
      case 'description':
        setDescription(e.target.value)
        break
      case 'dueDate':
        setDueDate(e.target.value)
        break
      case 'priority':
        setPriority((e.target.value) as TaskPriority)
        break
    }
  }

  const generateId = () => {
    return crypto.randomUUID();
  }

  useEffect(() => {
    if(taskToUpdate){
      setTitle(taskToUpdate.title);
      if(taskToUpdate.dueDate)setDueDate(taskToUpdate.dueDate);
      if(taskToUpdate.description) setDescription(taskToUpdate.description);
      setPriority(taskToUpdate.priority);
    }
  }, [taskToUpdate])
  
  const handleTask = (e: React.SubmitEvent) => {
    e.preventDefault()

    if(taskToUpdate) {
      const editedTask = {
        title, 
        description: description.trim() || undefined,
        dueDate: dueDate || undefined,
        priority,
      }
      if(editTask) editTask({...editedTask,createdAt: taskToUpdate.createdAt, id: taskToUpdate.id, status: taskToUpdate.status});
      setTaskToUpdate(undefined)
      return;
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
          <input value={title} type="text" name='title' onChange={handleField} />
        </div>
        <div className="input-field">
          <label htmlFor="description">Descrição <span>(opcional)</span></label>
          <textarea value={description} name="description" onChange={handleField}></textarea>
        </div>
        <div className="input-field">
          <label htmlFor="priority">Prioridade:</label>
          <select name="priority" onChange={handleField}>
            <option disabled selected value={taskToUpdate ? taskToUpdate.priority : ''}>Escolha uma prioridade</option>
              <option value={"Média"} >Média</option>
              <option value={"Baixa"}>Baixa</option>
              <option value={'Alta'} >Alta</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="dueDate">Prazo de entrega <span>(opcional)</span></label>
          <input value={dueDate} name='dueDate' type="date" onChange={handleField} />
        </div>
        <button type='submit' className='addTaskBtn'>{taskToUpdate ? "Salvar" : "Criar Task" }</button>
    </form>
    </div>
  );
};

export default Form;