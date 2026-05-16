import {useState} from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

import "./styles/App.css"
import Form from "./components/Form";
import type { ITask, TaskStatus, TaskPriority  } from './types';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | undefined>(undefined);

  const [filterStatus, setFilterStatus] = useState<TaskStatus | 'All'>('All')
  const [filterPriority, setFilterPriority] = useState<TaskPriority | 'All'>('All')
  /* 
  Adicionar depois a ordenação por datas
  const [filterDueDate, setFilterDueDate] = useState<'Recentes' | 'Antigas' | "All">('All'); */

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  }

  const addNewTask = (task: ITask) => {
    setTaskList([...taskList, task])
    toggleModalOpen();
  }

  const deleteTask = (id: string) => {
    const confirmacao = window.confirm("Tem certeza que deseja excluir essa tarefa?");
    if(!confirmacao) return;
    const updatedList: ITask[] = taskList.filter((task) => task.id !== id); 
    setTaskList(updatedList);
  }

  const editTask = (task: ITask) => {
    setTaskList((prev) => (prev.map((taskUnit) => taskUnit.id == task.id ? task : taskUnit)))
    toggleModalOpen()
  }

  const handleStatus = (id: string) => {
    setTaskList((prev) => {
      return prev.map((task) => {
        if(task.id !== id) return task; 
        return {
          ...task,
          status: task.status == "DONE" ? "TODO" : "DONE"
        }
      })
    })
  }

  const filteredTasks = taskList
  .filter((t) => filterStatus == 'All' || t.status == filterStatus)
  .filter((t) => filterPriority == 'All' || t.priority == filterPriority);
  
  return (
    <div className='app'>
        <Sidebar
        toggleModalOpen={toggleModalOpen} 
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        />
      <div className="mainContent">

      <Header />

        <TaskList 
        toggleModalOpen={toggleModalOpen}
        deleteTask={deleteTask} 
        setTaskToUpdate={setTaskToUpdate}
        taskList={filteredTasks}
        handleStatus={handleStatus}
        />
        
        {isModalOpen && taskToUpdate == undefined &&<Form
        setTaskToUpdate={setTaskToUpdate}
        taskToUpdate={taskToUpdate} 
        toggleModalOpen={toggleModalOpen} 
        addNewTask={addNewTask}
        />}
        {taskToUpdate && isModalOpen && <Form editTask={editTask} setTaskToUpdate={setTaskToUpdate}taskToUpdate={taskToUpdate} toggleModalOpen={toggleModalOpen} />}
      <Footer />
      </div>

    </div>
  )
}

export default App;