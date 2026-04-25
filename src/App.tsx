import {useState} from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

import "./styles/App.css"
import Form from "./components/Form";
import type { ITask } from './types';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  

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
  
  return (
    <div>
      <Header />
      <div className="mainContent">
        <Sidebar toggleModalOpen={toggleModalOpen} />
        <TaskList deleteTask={deleteTask} taskList={taskList} />
        {isModalOpen && <Form 
        toggleModalOpen={toggleModalOpen} 
        addNewTask={addNewTask}
        />}
      </div>
      <Footer />
    </div>
  )
}

export default App;