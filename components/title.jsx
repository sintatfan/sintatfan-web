export function SectionTitle({children}) {
    return (
        <h1 className="section-title">
            <span className="text-gradient">
                {children}
            </span>
        </h1>
    );
}