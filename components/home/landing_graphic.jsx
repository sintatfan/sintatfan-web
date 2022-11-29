export function LandingGraphic() {
    return (
        <div>
            <svg width={860} height={700}>
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
                  animation: line1 12s infinite alternate;
                }
                
                @keyframes line1 {
                    from {stroke-dashoffset: 0;}
                    to {stroke-dashoffset: -430.744;}
                }
                @keyframes line2 {
                    from {stroke-dashoffset: 0;}
                    to {stroke-dashoffset: -521.277;}
                }
                `}</style>
                <defs>
                    <radialGradient id="shadow-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop stop-color="#666666" stop-opacity="0.76"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </radialGradient>
                    <linearGradient id="line-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop stop-color="#FFC345"/>
                        <stop offset="0.5" stop-color="#F29516"/>
                        <stop offset="1" stop-color="#FFC345"/>
                    </linearGradient>
                </defs>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#999999" flood-opacity="0.12" />
                </filter>

                <image href="/images/landing_ide.svg" x={45} y={0} width={712} height={512} filter="url(#shadow)"></image>

                {/* Line */}
                <g transform="translate(320 380)">
                    <path d="M10 169.5C10 169.5 176 169.5 254.5 169.5C297.5 169.5 294.5 146 294.5 118.755C294.5 72 294.5 10 294.5 10"
                          stroke="url(#line-gradient)" stroke-dasharray="110 30 20 30 37 30 20 30 49 30 20 30"
                          className="landing-graphic-line landing-graphic-line-1" />
                </g>
                <g transform="translate(320 380)">
                    <path d="M0 209.5C0 209.5 176 209.5 274.5 209.5C339.5 209.5 339.5 146 339.5 118.755C339.5 72 339.5 0 339.5 0"
                          stroke="url(#line-gradient)" stroke-dasharray="48 30 117 30 92 30 73 30 40 30 5 30 60 30"
                          className="landing-graphic-line landing-graphic-line-2" />
                </g>

                {/* System Design Diagram */}
                <g transform="translate(-15 340)">
                    <ellipse cx={195} cy={290} rx={190} ry={65} fill="url(#shadow-gradient)"/>
                    <image href="/images/about_design_system.svg" x={0} y={0} width={380} height={380} filter="url(#shadow)"></image>
                </g>

                {/* Web Browser Console */}
                <g transform="translate(475 80)">
                    <ellipse cx={195} cy={290} rx={190} ry={65} fill="url(#shadow-gradient)"/>
                    <image href="/images/about_optimize.svg" x={0} y={0} width={380} height={380} filter="url(#shadow)"></image>
                </g>
            </svg>
        </div>
    );
}
