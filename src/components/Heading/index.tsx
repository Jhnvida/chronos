import styles from "./styles.module.css";

type HeadingProps = {
    title: string;
    subtitle: string;
};

function Heading({ title, subtitle }: HeadingProps) {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </>
    );
}

export { Heading };
