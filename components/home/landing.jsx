import {LandingContent} from "./landing_content";
import {LandingGraphic} from "./landing_graphic";

export default function LandingSection() {
    return (
        <div className="container px-4">
            <div className="lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
                <LandingContent />
                <LandingGraphic />
            </div>
        </div>
    );
}
