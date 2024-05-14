import {serialize} from 'next-mdx-remote/serialize'
import {getAllProjects, getProjectBySlug, getProjectsSlugs} from "../../src/api/portfolio";
import {PortfolioDetails} from "../../components/portfolio/layout_details";
import Head from "next/head";

const PortfolioDetailsPage = function ({meta, contentSource, introductionSource, related}) {
    return (
        <>
            <Head>
                <title>{meta.title} | Terence Fan</title>
                <meta property="og:image" content={meta.bannerImage || meta.coverImage || '/images/ogimg.png'} />
                <meta property="og:description" content={meta.excerpt} />
            </Head>
            <PortfolioDetails meta={meta} related={related}
                              introduction={introductionSource} content={contentSource} />
        </>
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

export default PortfolioDetailsPage;