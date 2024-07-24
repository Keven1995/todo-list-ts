// css
import styles from "./App.module.css";
// Components
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Formulario btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <List />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
