import fs from "fs"
import {join} from "path"
import matter from "gray-matter"

const directory = join(process.cwd(), "src/content/portfolio")

export function getProjectsSlugs() {
    return fs.readdirSync(directory)
}

export function getProjectBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.mdx$/, "")
    const fullPath = join(directory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const {data, content, excerpt} = matter(fileContents, {excerpt: true, sections: true})
    const entry = matter(fileContents, {excerpt: true, sections: true})

    const items = {}
    console.log(entry);

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug
        }
        if (field === "content") {
            items[field] = content
        }
        if (field === "excerpt") {
            items[field] = excerpt
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllProjects(fields = []) {
    const slugs = getProjectsSlugs()
    return slugs
        .map((slug) => getProjectBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((item1, item2) => (item1.date > item2.date ? "-1" : "1"));
}