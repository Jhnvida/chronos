import styles from "./styles.module.css";

type InfoProps = {
    value: string;
};

function Info({ value }: InfoProps) {
    return (
        <>
            <div className={styles.info}>
                <span className={styles.label}>Trabalhando em:</span>
                <span className={styles.value}>{value}</span>
            </div>
        </>
    );
}

export { Info };
