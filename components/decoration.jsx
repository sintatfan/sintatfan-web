export function PillsDecoration({ x, y, yOffset, flip = false }) {
    return (
        <div className={`absolute ${x} ${y} z-[-10] pointer-events-none overflow-hidden ${flip ? '-scale-x-100' : ''}`}>
            <img src="/images/bg_4pills.svg" alt="" className={`relative ${yOffset ? `top-${yOffset}` : ''}`} />
        </div>
    );
}