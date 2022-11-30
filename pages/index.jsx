import LandingSection from "../components/home/landing";
import AboutSection from "../components/home/about";
import WorkSection from "../components/home/portfolio";
import ContactSection from "../components/home/contact";
import {getAllProjects} from "../src/api/portfolio";
import Head from "next/head";

export default function Home({projects}) {
    return (
        <div>
            <Head>
                <meta property="og:image" content="/images/ogimg.png" />
            </Head>

            <LandingSection />
            <AboutSection />
            <WorkSection projects={projects} />
            <ContactSection />
        </div>
    )
}

export async function getStaticProps() {
    const projects = getAllProjects();

    return {
        props: {
            projects
        }
    };
}