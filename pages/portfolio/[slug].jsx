import {serialize} from 'next-mdx-remote/serialize'
import {getAllProjects, getProjectBySlug, getProjectsSlugs} from "../../src/api/portfolio";
import {PortfolioDetails} from "../../components/portfolio/layout_details";

const Page = function ({meta, contentSource, introductionSource, related}) {
    return (
        <PortfolioDetails meta={meta} related={related}
                          introduction={introductionSource} content={contentSource} />
    );
};

export async function getStaticProps({ params }) {
    const project = getProjectBySlug(params.slug, true);

    return {
        props: {
            meta: project.meta,
            introductionSource: project.introduction ? await serialize(project.introduction) : null,
            contentSource: await serialize(project.content),
            related: getAllProjects().filter(i => i.meta.slug !== params.slug).slice(0, 2),
        },
    }
}


export const getStaticPaths = async () => {
    const paths = getProjectsSlugs()
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    }
}

export default Page;