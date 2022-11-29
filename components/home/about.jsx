import {SectionTitle} from "../title";
import SubsectionShare from "./about_share";
import {LightDecoration} from "../decoration";
import AboutSubsection from "./about_subsection";
import {Biography} from "./about_biography";

export default function AboutSection() {
    return (
        <div className="container-md px-4 relative pt-48">
            <LightDecoration x="-left-80" y="-top-16" />

            <SectionTitle>About</SectionTitle>

            <Biography />

            <h2 className="h2 mb-8">What do I do?</h2>

            <div className="mb-24">
                <AboutSubsection heading="I design." iconSrc="/images/about_design.svg" lightPos="left">
                    <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>
                </AboutSubsection>

                <AboutSubsection heading="I develop." iconSrc="/images/about_develop.svg" lightPos="right">
                    <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>
                </AboutSubsection>

                <AboutSubsection heading="I optimize." iconSrc="/images/about_optimize.svg" lightPos="left">
                    <p>Morbi mauris dolor, lacinia id elit eget, lacinia mattis urna. Proin luctus, arcu a pulvinar condimentum, tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>
                </AboutSubsection>
            </div>

            <SubsectionShare />
        </div>
    );
}
