import {useState} from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

import "./styles/App.css"
import Form from "./components/Form";
import type { ITask, TaskStatus } from './types';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
    const [status, setStatus] = useState<TaskStatus>('TODO');
  

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const toggleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  }

  const addNewTask = (task: ITask) => {
    setTaskList([...taskList, task])
    toggleModalOpen();
  }
  
  return (
    <div>
      <Header />
      <div className="mainContent">
        <Sidebar toggleModalOpen={toggleModalOpen} />
        <TaskList taskList={taskList} />
        {isModalOpen && <Form 
        status={status}
        toggleModalOpen={toggleModalOpen} 
        addNewTask={addNewTask}
        />}
      </div>
      <Footer />
    </div>
  )
}

export default App;