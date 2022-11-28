import fs from "fs"
import {join} from "path"
import matter from "gray-matter"
import yaml from 'js-yaml';

const directory = join(process.cwd(), "src/content/portfolio")

export function getProjectsSlugs() {
    return fs.readdirSync(directory)
}

export function getProjectBySlug(slug, withContent = false) {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(directory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const md = matter(fileContents, {
        section: function(section, file) {
            if (typeof section.data === 'string' && section.data.trim() !== '') {
                section.data = yaml.load(section.data);
            }
            section.content = section.content.trim() + '\n';
        }
    });

    const result = {
        meta: {
            slug: realSlug,
            ...md.data,
        },
    };

    if (withContent) {
        if (md.sections.length > 0) {
            const content = md.sections.find(i => i.key === 'content');
            result.content = content?.content;
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
