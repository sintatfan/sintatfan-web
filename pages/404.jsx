import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="container px-4 text-center my-32 min-h-[calc(100vh-600px)]">
            <h1 className="text-5xl font-bold mb-4">
                <span className="text-gradient">404 Not Found</span>
            </h1>
            <div className="mb-8">
                Oh no! 😖 The page that you were looking for doesn&apos;t exist.
            </div>
            <Link href={'/'} className="btn btn-outline btn-md">Back to Home</Link>
        </div>
    );
}