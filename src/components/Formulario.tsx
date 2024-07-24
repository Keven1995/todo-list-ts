import styles from "./Form.module.css"

interface Props {
  btnText: string
}

const Formulario = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" placeholder="Dificuldade da tarefa" />
      </div>
      <input type="submit" value={btnText}/>
    </form>
  );
};

export default Formulario;
