# Sin-Tat's Personal Website
This is the repository of my personal website, which introduced my background, vision and some selected projects.  

**[Visit my website](https://sintat.fan)**

## Technology Stack
I designed the UI with [Figma](https://figma.com) and built this website with this technology stack:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

Since it is a simple personal website with no backend needed, this project adopted the *Static Site Generation (SSG)* approach. 
With no remote CMS, the portfolio pages were written in MDX format and parsed by [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) and [gray-matter](https://github.com/jonschlinkert/gray-matter).

> *Guess what?* This is my first time to use Tailwind CSS to build web frontend. It's really an amazing framework to build a responsive frontend with a highly-customized design system.

## Getting Started
If you are interested in this project, feel free to clone it and then run `yarn install` to install all required dependencies.

To run the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
This project was developed with SSG approach.
Thanks to Next.js's [Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export) feature, building a well-structured static HTML site has been super easy.
You can run this command to generate a static HTML site:
```bash
next build && next export
```

The built site will be exported to the `out` directory. 

It has been my choice to deploy the website to Cloudflare pages. But it should support other static site hosting, such as Vercel, AWS Amplify, Google Firebase Hosting and Azure Static Site.
