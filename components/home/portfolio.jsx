import {SectionTitle} from "../title";
import HorizontalProjectCard from "../portfolio/card_horizontal";
import {LightDecoration, PillsDecoration} from "../decoration";

export default function WorkSection({ projects }) {
    return (
        <div className="container-md px-4 relative pt-36 mb-40 lg:mb-80" id="portfolio">
            <PillsDecoration x="-right-1/4" y="top-0" flip />
            <LightDecoration x="-left-80" y="-top-16" />

            <SectionTitle>Work</SectionTitle>
            <p className="mb-8 text-lg">
                It&apos;s always rewarding to help corporations build digital solutions. <br />
                Check out some of my recent projects and see how I faced these challenges.
            </p>

            <WorkList projects={projects} />
        </div>
    );
}

function WorkList({ projects }) {
    return (
        <div className="space-y-8">
            {projects.map(project => <HorizontalProjectCard project={project.meta} key={project.meta.slug} />)}
        </div>
    );
}