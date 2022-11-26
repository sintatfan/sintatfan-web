export default function SubsectionShare() {
    const photos = [
        { src: '/images/share_workshop1.jpg', src2X: '/images/share_workshop1@2x.jpg', alt: 'I introduced the basic concept of Arduino in an internal workshop', },
        { src: '/images/share_workshop2.jpg', src2X: '/images/share_workshop2@2x.jpg', alt: 'I collaborated with my teammates to improve developer experience in a workshop.', },
        { src: '/images/share_present.jpg', src2X: '/images/share_present@2x.jpg', alt: 'I presented in a hackathon.', },
    ];

    return (
        <div className="mb-48 relative">
            <div className="max-w-2xl mb-9">
                <h3 className="h3">I share and collaborate.</h3>
                <p>I hope my teammates can grow together. Other than development, I also worked as a senior position to share my tortor lectus fermentum eros, a varius nisi ex quis orci. Aenean placerat congue auctor. Nulla ullamcorper egestas eros. Aenean nec porttitor arcu.</p>
            </div>
            <Gallery photos={photos} />

            {/* Decoration */}
            <div className="absolute -bottom-5 -right-1/4 z-[-10] pointer-events-none">
                <img src="/images/bg_4pills.svg" alt="" className="relative top-24" />
            </div>
        </div>
    );
}

function Gallery({photos}) {
    return (
        <div className="grid grid-cols-3 gap-5">
            {photos.map((p, i) => <GalleryPhoto photo={p} key={i} />)}
        </div>
    );
}

function GalleryPhoto({photo}) {
    return (
        <div>
            <img src={photo.src}
                 srcSet={`${photo.src2X} 2x`}
                 alt={photo.alt}
                 className="rounded-xl"
            />
        </div>
    );
}