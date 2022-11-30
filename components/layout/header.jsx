import styles from "./header.module.css";
import Link from "next/link";
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
        <header className={`${styles.header} fixed top-0 left-0 right-0 z-50 transition-height duration-300 ${isGlassy ? `${styles.headerGlassy} bg-body/80 backdrop-blur-xl` : ''}`}>
            <div className="container px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/#top">
                    <img src="/images/logo.svg" alt="" className={styles.logo}
                         aria-label="Sin-Tat&apos;s Personal Website"/>
                </Link>

                {/* Navigation */}
                <Navigation/>
            </div>
        </header>
    );
}