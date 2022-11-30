export function LandingGraphic() {
    return (
        <div>
            <svg viewBox="0 0 860 700" className="w-full lg:w-[550px] lg:h-[448px] xl:w-[660px] xl:h-[537px] 2xl:w-[860px] 2xl:h-[700px]">
                <style jsx>{`
                .landing-graphic-line {
                    fill: none;
                    stroke-width: 20px;
                    stroke-linecap: round;
                    stroke-dashoffset: 0;
                }
                .landing-graphic-line-1 {
                  animation: line1 14s infinite alternate;
                }
                .landing-graphic-line-2 {
                  animation: line1 10s infinite alternate;
                }
                
                @keyframes line1 {
                    from {stroke-dashoffset: 0;}
                    to {stroke-dashoffset: -430;}
                }
                @keyframes line2 {
                    from {stroke-dashoffset: 0;}
                    to {stroke-dashoffset: -520;}
                }
                `}</style>
                <defs>
                    <radialGradient id="shadow-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop stopColor="#666666" stopOpacity="0.5"/>
                        <stop offset="1" stopColor="#666666" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="line-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop stopColor="#FFC345"/>
                        <stop offset="0.5" stopColor="#F29516"/>
                        <stop offset="1" stopColor="#FFC345"/>
                    </linearGradient>
                </defs>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#999999" floodOpacity="0.12" />
                </filter>

                <g transform="translate(45 0)">
                    <ellipse cx={356} cy={510} rx={356} ry={40} fill="url(#shadow-gradient)" opacity={0.8}/>
                    <image href="/images/landing_ide.svg" x={0} y={0} width={712} height={512} filter="url(#shadow)"></image>
                </g>

                {/* Line */}
                <g transform="translate(320 380)">
                    <path d="M10 169C10 169 176 169 254 169C297 169 294 146 294 118C294 72 294 10 294 10"
                          stroke="url(#line-gradient)" strokeDasharray="110 30 20 30 37 30 20 30 49 30 20 30"
                          className="landing-graphic-line landing-graphic-line-1" />
                </g>
                <g transform="translate(320 380)">
                    <path d="M0 209C0 209 176 209 274 209C339 209 339 146 339 118C339 72 339 0 339 0"
                          stroke="url(#line-gradient)" strokeDasharray="48 30 117 30 92 30 73 30 40 30 5 30 60 30"
                          className="landing-graphic-line landing-graphic-line-2" />
                </g>

                {/* System Design Diagram */}
                <g transform="translate(-15 340)">
                    <ellipse cx={195} cy={295} rx={180} ry={40} fill="url(#shadow-gradient)"/>
                    <image href="/images/about_design_system.svg" x={0} y={0} width={380} height={380} filter="url(#shadow)"></image>
                </g>

                {/* Web Browser Console */}
                <g transform="translate(475 80)">
                    <ellipse cx={195} cy={295} rx={180} ry={65} fill="url(#shadow-gradient)"/>
                    <image href="/images/about_optimize.svg" x={0} y={0} width={380} height={380} filter="url(#shadow)"></image>
                </g>
            </svg>
        </div>
    );
}
