export function Image({src, alt, caption}) {
    return (
        <figure>
            <img src={src} alt={alt} className="rounded-xl shadow-lg" />
            <figcaption className="text-center">{caption}</figcaption>
        </figure>
    );
}