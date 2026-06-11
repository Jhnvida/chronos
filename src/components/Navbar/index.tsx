import { BarChart2, Settings } from "lucide-react";
import styles from "./styles.module.css";

export function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <span className={styles.title}>Chronos</span>
            </div>

            <nav className={styles.nav}>
                <button className={styles.iconButton} aria-label="Estatísticas">
                    <BarChart2 size={20} />
                </button>

                <button className={styles.iconButton} aria-label="Configurações">
                    <Settings size={20} />
                </button>
            </nav>
        </header>
    );
}
