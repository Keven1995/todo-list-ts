// css
import { useState } from "react";
import styles from "./App.module.css";
// Components
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

// Interfaces
import { ITask } from "./interfaces/Task";
import Modal from "./Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <div>
      <Modal
        children={<Formulario btnText="Editar tarefa" taskList={taskList} />}
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Formulario
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
