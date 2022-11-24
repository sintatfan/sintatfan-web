import LandingSection from "../components/home/landing";
import AboutSection from "../components/home/about";
import WorkSection from "../components/home/portfolio";
import ContactSection from "../components/home/contact";

export default function Home() {
    return (
        <div>
            <LandingSection />
            <AboutSection />
            <WorkSection />
            <ContactSection />
        </div>
    )
}
