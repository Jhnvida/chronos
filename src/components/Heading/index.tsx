import styles from "./styles.module.css";

type HeadingProps = {
    title: string;
    subtitle: string;
};

function Heading({ title, subtitle }: HeadingProps) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
        </div>
    );
}

export { Heading };
