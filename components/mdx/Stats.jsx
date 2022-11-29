export function Stats({children}) {
    return (
        <div className="grid sm:grid-cols-2 gap-4">
            {children}
        </div>
    )
}

export function StatItem({label, children}) {
    return (
        <div className="bg-gray-100 rounded-xl px-8 py-8 space-y-2">
            <div className="text-5xl">{children}</div>
            <div className="font-light">{label}</div>
        </div>
    )
}