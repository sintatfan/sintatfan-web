import styles from "./header.module.css";
import Navigation from "./navigation";
import {useEvent} from "react-use";
import {useState} from "react";

export default function PageHeader() {
    const [isGlassy, setIsGlassy] = useState(false);
    const onPageScroll = function (e) {
        if (window.scrollY >= 64 && !isGlassy) {
            setIsGlassy(true);
        } else if (window.scrollY < 64 && isGlassy) {
            setIsGlassy(false);
        }
    };
    useEvent('scroll', onPageScroll);

    return (
        <header className={`${styles.header} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isGlassy ? `${styles.headerGlassy} bg-body/80 backdrop-blur-xl` : ''}`}>
            <div className="container h-full flex items-center justify-between">
                {/* Logo */}
                <a href="#top">
                    <img src="/images/logo.svg" alt="" className={styles.logo}
                         aria-label="Sin-Tat&apos;s Personal Website"/>
                </a>

                {/* Navigation */}
                <Navigation/>
            </div>
        </header>
    );
}