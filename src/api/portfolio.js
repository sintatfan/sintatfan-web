import fs from "fs"
import {join} from "path"
import matter from "gray-matter"

const directory = join(process.cwd(), "src/content/portfolio")

export function getProjectsSlugs() {
    return fs.readdirSync(directory)
}

export function getProjectBySlug(slug, withContent = false) {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(directory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const md = matter(fileContents, { sections: true });
    console.log(md.sections);

    const result = {
        meta: {
            slug: realSlug,
            ...md.data,
        },
    };

    if (withContent) {
        if (md.sections.length > 0) {
            result.content = md.sections.find(i => i.key === 'content')?.content;
            result.introduction = md.sections.find(i => i.key === 'introduction')?.content;
        } else {
            result.content = md.content;
        }
    }

    return result;
}

export function getAllProjects() {
    const slugs = getProjectsSlugs()
    return slugs
        .map((slug) => getProjectBySlug(slug, false))
        .sort((item1, item2) => (item1.publishDate > item2.publishDate ? "-1" : "1"));
}
