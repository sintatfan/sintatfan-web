import {ProjectMeta} from "./meta_card";
import {ReadMoreSection} from "./related";

export function PortfolioDetails({meta, children}) {
    console.log(meta, children);
    return (
        <div className="container-md">
            <h1 className="text-5xl font-bold mb-6 w-7/12">
                {meta.title}
            </h1>

            <div className="flex justify-between mb-16">
                <div className="w-6/12">
                    <div className="font-light mb-3">{meta.displayDate}</div>
                    <div>{meta.excerpt}</div>
                </div>
                <div className="flex-none w-5/12">
                    <ProjectMeta meta={meta} />
                </div>
            </div>

            <img src={meta.coverImage} alt="" className="rounded-3xl shadow-lg mb-16" />

            <div className="max-w-3xl mx-auto">
                <div className="prose max-w-none">
                    {children}
                </div>

                <hr className="my-12" />

                <ReadMoreSection exclude={meta.slug} />
            </div>
        </div>
    );
}
