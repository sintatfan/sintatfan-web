import {LightDecoration} from "../decoration";

export function SubsectionDo() {
    return (
        <>
            <h2 className="h2 mb-8">What do I do?</h2>

            <div className="mb-24">
                <AboutSubsection heading="I design." icon={<DesignIcon />} lightPos="left">
                    <p className="mb-2">I design systems that are scalable and cost-effective with my exposure in cloud services and microservice architecture.</p>
                    <p>Recently gained a Master&apos;s Degree in Interaction Design, I&apos;m enthusiastic to work with Design teams to design user experience combining with technology.</p>
                </AboutSubsection>

                <AboutSubsection heading="I develop." iconSrc="/images/about_develop.svg" lightPos="right">
                    <p>I like to enliven design into vivid digital products elegantly with my solid coding ability. I build pixel-perfect frontend with HTML, JavaScript <em>(React, Vue.js particularly)</em> and CSS; and develop robust backend and RESTful APIs with Node.js, TypeScript and PHP.</p>
                </AboutSubsection>

                <AboutSubsection heading="I optimize." iconSrc="/images/about_optimize.svg" lightPos="left">
                    <p>doesn&apos;t stop. [system performance, UX]</p>
                </AboutSubsection>
            </div>
        </>
    );
}

function AboutSubsection({icon, iconSrc, heading, children, lightPos}) {
    return (
        <div className="sm:flex items-center sm:space-x-8 md:space-x-0 py-8 md:py-2">
            <div className="flex-none mb-6 sm:mb-0 sm:w-1/3 md:w-5/12 flex justify-center">
                <div className="relative">
                    <div className="drop-shadow-lg">
                        {iconSrc ? <img src={iconSrc} alt="" /> : icon}
                    </div>
                    <LightDecoration x={lightPos === 'right' ? '-right-3/4' : '-left-3/4'} y="-bottom-36" extraClass="scale-50" />
                </div>
            </div>
            <div className="flex-auto">
                <h3 className="h3 mb-2">{heading}</h3>
                {children}
            </div>
        </div>
    );
}

function DesignIcon() {
    return (
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="w-full">
            <image href="/images/about_design_system.svg" height="175" width="175" x="-8" y="8" />
            <image href="/images/about_design_flow.svg" height="175" width="175" x="75" y="60" />
        </svg>
    );
}