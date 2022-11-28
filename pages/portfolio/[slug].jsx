import {MDXRemote} from "next-mdx-remote";
import {serialize} from 'next-mdx-remote/serialize'
import {getAllProjects, getProjectBySlug, getProjectsSlugs} from "../../src/api/portfolio";
import matter from "gray-matter";
import {PortfolioDetails} from "../../components/portfolio/layout_details";

const Page = function ({meta, source, related}) {
    const components = {};

    return (
        <PortfolioDetails meta={meta} related={related}>
            <MDXRemote {...source} components={components} />
        </PortfolioDetails>
    );
};

export async function getStaticProps({ params }) {
    const project = getProjectBySlug(params.slug, true);
    const mdxSource = await serialize(project.content);

    return {
        props: {
            meta: project.meta,
            source: mdxSource,
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