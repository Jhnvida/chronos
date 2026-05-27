import styles from "./styles.module.css";

function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Chronos.</div>

            <nav className={styles.nav}>
                <a href="/" className={`${styles.link} ${styles.active}`}>
                    Início
                </a>
                <a href="/history" className={styles.link}>
                    Histórico
                </a>
                <a href="/settings" className={styles.link}>
                    Configurações
                </a>
            </nav>
        </div>
    );
}

export { Sidebar };
