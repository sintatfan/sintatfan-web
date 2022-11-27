export default function LandingSection() {
    return (
        <div className="container">
            <div className="grid grid-cols-2 gap-5 items-center">
                <LandingContent />
                <LandingGraphic />
            </div>
        </div>
    );
}

function LandingContent() {
    return (
        <div>
            <div className="mb-6">
                <div className="font-bold text-4xl">
                    Hello, I&apos;m <span className="text-gradient">Sin-Tat</span>.
                </div>
                <div className="font-light">
                    <span className="text-2xl">Fullstack Developer</span> - <span>Frontend Dev | Backend Dev | UX Architect</span>
                </div>
            </div>

            <div className="text-5xl leading-tight">
                I <span className="text-gradient font-bold">design</span>, <span
                className="text-gradient font-bold">develop</span> and <span
                className="text-gradient font-bold">optimize</span> software that solve problems and delight people.
            </div>
        </div>
    );
}

function LandingGraphic() {
    return (
        <div>
            <svg width={700} height={700}>
                <rect x={0} y={0} width={700} height={700} fill="#888888"></rect>
            </svg>
        </div>
    );
}