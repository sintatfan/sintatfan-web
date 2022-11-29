export function PillsDecoration({x, y, yOffset, flip = false}) {
    return (
        <div className={`absolute ${x} ${y} z-[-10] pointer-events-none overflow-hidden`}>
            <img src="/images/bg_4pills.svg" alt="" className={`relative ${yOffset || ''} ${flip ? '-scale-x-100' : ''}`}/>
        </div>
    );
}

export function LightDecoration({x, y, extraClass}) {
    return (
        <div className={`absolute ${x} ${y} z-[-10] w-[435px] h-[435px] bg-gradient-radial from-primary/20 to-white/0 ${extraClass}`}></div>
    );
}