import styles from "./styles.module.css";

function List() {
    return (
        <>
            <section className={styles.section}>
                <h2 className={styles.title}>Lista de Tarefas</h2>

                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Qual o próximo foco?" />

                    <div className={styles.inputGroup}>
                        <input className={`${styles.input} ${styles.smallInput}`} type="number" defaultValue={15} />
                        <span className={styles.minutes}>min</span>
                    </div>

                    <button className={styles.button} type="submit">
                        Adicionar
                    </button>
                </form>
            </section>
        </>
    );
}

export { List };
