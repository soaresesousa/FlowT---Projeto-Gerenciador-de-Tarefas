import {useState} from 'react'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import EditModal from './components/EditModal'

import "./styles/App.css"
import Form from "./components/Form";
import type { ITask } from './types';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | undefined>(undefined);

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
    setTaskList(taskList.map((taskUnit) => {
      return taskUnit.id == task.id ? task : taskUnit
    }));
    toggleModalOpen()
  }
  
  return (
    <div>
      <Header />
      <div className="mainContent">

        <Sidebar 
        toggleModalOpen={toggleModalOpen} />

        <TaskList 
        toggleModalOpen={toggleModalOpen}
        deleteTask={deleteTask} 
        setTaskToUpdate={setTaskToUpdate}
        taskList={taskList} />
        
        {isModalOpen && taskToUpdate == undefined &&<Form
        setTaskToUpdate={setTaskToUpdate}
        taskToUpdate={taskToUpdate} 
        toggleModalOpen={toggleModalOpen} 
        addNewTask={addNewTask}
        />}
        {taskToUpdate && isModalOpen && <EditModal><Form editTask={editTask} setTaskToUpdate={setTaskToUpdate}taskToUpdate={taskToUpdate} toggleModalOpen={toggleModalOpen} /></EditModal>}
      </div>
      <Footer />
    </div>
  )
}

export default App;