import { Heading } from "./components/Heading";
import { Timer } from "./components/Timer";
import styles from "./App.module.css";

function App() {
    return (
        <>
            <div className={styles.content}>
                <Heading title="Início" subtitle="Trabalhe com intenção, descanse com propósito." />
                <Timer />
            </div>
        </>
    );
}

export { App };
