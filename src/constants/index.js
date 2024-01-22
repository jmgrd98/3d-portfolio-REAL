import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Fullstack Developer",
        company_name: "Facilite Tecnologia Contábil",
        date: "August 2019 - September 2021",
        points: [
            "Developing and maintaining a web accountability application using Angular on the frontend and NodeJS on the backend.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Developer",
        company_name: "Neil Patel",
        date: "Jan 2022 - Dec 2022",
        points: [
            "Developing and maintaining web SEO tools using ReactJS.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Fullstack Developer",
        company_name: "Zello Tecnologia",
        date: "Jan 20223 - Dec 2023",
        points: [
            "Developing and maintaining big, robust and scalable web applications for the Ministry of Health of Brazil.",
            "Collaborated on both frontend with Angular and backend with NestJS and Springboot for systems used by millions of brazilian citizens, such as ConecteSUS.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/jmgrd98',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/joao-marcelo-dantas',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Web3 Crowdfunding Platform',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://web3-crowdfunding-4u1n.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Cryptoverse',
        description: 'Check out the latest crypto news and prices! ReactJS app that uses a couple of crypto APIs from Rapid Hub.',
        link: 'https://cryptoverse-gules.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-blue',
        name: 'Sumz',
        description: "AI-powered tool that summarizes internet articles and blogposts using an API from @RapidAPI that's based on the GPT-4 LLM model.",
        link: 'https://sumz-blush.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Promptopia',
        description: 'NextJS + MongoDB app for sharing AI prompts.',
        link: 'https://promptopia-jmgrd98.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: '3D iPhone landing page',
        description: 'iPhone selling landing page made with 3D rendering and animation in the browser, using Javascript and the Three.js and GSAP libraries, as well as the WebGI SDK.',
        link: 'https://iphone-3d-website-two.vercel.app/',
    },
];