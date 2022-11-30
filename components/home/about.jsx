import {SectionTitle} from "../title";
import SubsectionShare from "./about_share";
import {LightDecoration} from "../decoration";
import {Biography} from "./about_biography";
import {SubsectionDo} from "./about_subsection";

export default function AboutSection() {
    return (
        <div className="container-md px-4 relative pt-48" id="about">
            <LightDecoration x="-left-80" y="-top-16" />

            <SectionTitle>About</SectionTitle>

            <Biography />
            <SubsectionDo />
            <SubsectionShare />
        </div>
    );
}
