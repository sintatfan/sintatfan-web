import {PillsDecoration} from "../decoration";

export default function SubsectionShare() {
    const photos = [
        { src: '/images/share_workshop1.jpg', src2X: '/images/share_workshop1@2x.jpg', alt: 'I introduced the basic concept of Arduino in an internal workshop', },
        { src: '/images/share_workshop2.jpg', src2X: '/images/share_workshop2@2x.jpg', alt: 'I collaborated with my teammates to improve developer experience in a workshop.', },
        { src: '/images/share_present.jpg', src2X: '/images/share_present@2x.jpg', alt: 'I presented in a hackathon.', },
    ];

    return (
        <div className="mb-24 relative">
            <div className="max-w-2xl mb-9">
                <h3 className="h3 mb-2">I share and collaborate.</h3>
                <p>I am a team player who would love to grow with my teammates together. I enjoy sharing my knowledge and experiences. I collaborated with my talented teammates closely.</p>
            </div>
            <Gallery photos={photos} />

            {/* Decoration */}
            <PillsDecoration x="-right-1/4" y="-bottom-20" />
        </div>
    );
}

function Gallery({photos}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {photos.map((p, i) => <GalleryPhoto photo={p} key={i} />)}
        </div>
    );
}

function GalleryPhoto({photo}) {
    return (
        <div className="shadow-lg rounded-xl overflow-hidden">
            <img src={photo.src}
                 srcSet={`${photo.src2X} 2x`}
                 alt={photo.alt}
                 className="w-full"
            />
        </div>
    );
}