import styles from "./layout.module.css";

export default function PageHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                Page Header
            </div>
        </header>
    );
}