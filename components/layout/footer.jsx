export default function PageFooter() {
    return (
        <footer className="container relative py-16 space-y-3">
            {/* Main content */}
            <div className="flex flex-col items-center">
                <img src="/logo.svg" alt="" className="w-10 grayscale" />
                <div className="text-gray-400 text-xs">
                    Made with Next.js &amp; Tailwind CSS.
                </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-16 -right-1/4">
                <img src="/bg_4pills.svg" alt="" />
            </div>
        </footer>
    );
}