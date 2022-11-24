export default function PageFooter() {
    return (
        <footer className="relative container">
            {/* Main content */}
            <div className="flex flex-col items-center space-y-3 py-16">
                <img src="/images/logo.svg" alt="" className="w-10 grayscale" />
                <div className="text-gray-400 text-xs">
                    Made with Next.js &amp; Tailwind CSS.
                </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-16 -right-1/4">
                <img src="/images/bg_4pills.svg" alt="" />
            </div>
        </footer>
    );
}