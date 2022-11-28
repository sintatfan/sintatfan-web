export function Card({children, onClick, extraClasses}) {
    let classes = `bg-white/50 backdrop-blur-lg rounded-2xl shadow-card overflow-hidden`;

    // Hover classes
    if (typeof onClick === 'function') {
        classes += ' hover:shadow-card-elevated hover:bg-white/90 transition-all duration-500 cursor-pointer';
    }

    // Extra classes
    if (extraClasses) {
        classes += ' ' + extraClasses;
    }

    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
}