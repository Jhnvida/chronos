import styles from "./styles.module.css";

type ContentProps = {
    children: React.ReactNode;
};

function Content({ children }: ContentProps) {
    return (
        <>
            <main className={styles.main}>{children}</main>
        </>
    );
}

export { Content };
