import {getAllProjects, getProjectBySlug} from "../../src/api/portfolio";

const PortfolioDetailsPage = ({ project }) => {
    console.log(project);
    return (
        <div>
            Portfolio details page
        </div>
    );
}

export async function getStaticProps({ params }) {
    const project = getProjectBySlug(params.slug, [
        "title",
        "excerpt",
        "date",
        "slug",
        "author",
        "content",
        "coverImage",
        "coverImageAlt",
        "coverImageHeight",
        "coverImageWidth",
        "draft",
        "excerpt",
    ])

    return {
        props: { project },
    }
}

export async function getStaticPaths() {
    const projects = getAllProjects(["slug"])

    return {
        paths: projects.map((project) => {
            return {
                params: { ...project },
            }
        }),
        fallback: false,
    }
}

export default PortfolioDetailsPage
