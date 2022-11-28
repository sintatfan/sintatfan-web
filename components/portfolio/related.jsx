import CompactProjectCard from "./card_compact";

export function ReadMoreSection({related}) {
    return (
        <>
            <h3 className="h3 mb-6">Read more stories</h3>

            <div className="grid grid-cols-2 gap-4 mb-12">
                {related.map(project => (<CompactProjectCard project={project.meta} key={project.meta.slug} />))}
            </div>
        </>
    )
}