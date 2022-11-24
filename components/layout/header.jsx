import styles from "./header.module.css";
import Navigation from "./navigation";

export default function PageHeader() {
    return (
        <header className={`${styles.header} bg-body/80 backdrop-blur-xl fixed top-0 left-0 right-0`}>
            <div className="container h-full flex items-center justify-between">
                {/* Logo */}
                <a href="#top">
                    <img src="/images/logo.svg" alt="" className={styles.logo} />
                </a>

                {/* Navigation */}
                <Navigation />
            </div>
        </header>
    );
}