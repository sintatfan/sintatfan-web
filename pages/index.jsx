import LandingSection from "../components/home/landing";
import AboutSection from "../components/home/about";
import WorkSection from "../components/home/portfolio";
import ContactSection from "../components/home/contact";
import {getAllProjects} from "../src/api/portfolio";

export default function Home({projects}) {
    return (
        <div>
            <LandingSection />
            <AboutSection />
            <WorkSection projects={projects} />
            <ContactSection />
        </div>
    )
}

export async function getStaticProps() {
    const projects = getAllProjects();
    console.log(projects);

    return {
        props: {
            projects
        }
    };
}