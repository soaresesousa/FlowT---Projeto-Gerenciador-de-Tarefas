import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

import "./styles/App.css"
import Form from "./components/Form";

function App() {

  return (
    <div>
      <Header />
      <div className="mainContent">
        <Sidebar />
        <TaskList />
        <Form />
      </div>
      <Footer />
    </div>
  )
}

export default App;