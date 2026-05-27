import { Sidebar } from "./components/Sidebar";
import { Heading } from "./components/Heading";
import { Timer } from "./components/Timer";
import styles from "./App.module.css";

function App() {
    return (
        <>
            <Sidebar />

            <main className={styles.mainContent}>
                <Heading title="Início" subtitle="Trabalhe com intenção, descanse com propósito." />
                <Timer />
            </main>
        </>
    );
}

export { App };
