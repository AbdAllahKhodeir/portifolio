import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs, intermountain, netflix, motorola, fidelity, java, cpp, jenkins, maven, kubernetes,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Backend Engineer",
        icon: backend,
    },
    {
        title: "Full Stack Engineer",
        icon: web,
    },
    {
        title: "Platform Engineer",
        icon: creator,
    },
    {
        title: "Cloud & Infrastructure Engineer",
        icon: docker,
    },
];

const technologies = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Jenkins",
        icon: jenkins,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Maven",
        icon: maven,
    },
    {
        name: "Kubernetes",
        icon: kubernetes,
    },
];

const experiences = [
    {
        title: "Senior Software Engineer",
        company_name: "Fidelity Investments",
        icon: fidelity,
        iconBg: "#383E56",
        date: "Aug 2023 - Present",
        points: [
            "Led the design, development, and optimization of high-performance backend REST APIs for personal investing platforms.",
            "Architected and implemented low-latency trading APIs, improving transaction speed and platform reliability.",
            "Reduced API latency by 30% and increased throughput by 25% through performance tuning and system optimizations.",
            "Migrated trading and research APIs to AWS with Kubernetes, enhancing scalability and system resilience.",
            "Designed scalable architecture patterns, enabling the platform to handle a 110% surge in transaction volume with zero performance degradation.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Motorola Solutions",
        icon: motorola,
        iconBg: "#FFFFFF",
        date: "Jun 2021 - Jun 2022",
        points: [
            "Developed critical software components and RESTful API web services for Motorola’s technology ecosystem.",
            "Built an internal web-based compliance tool using Node.js, MySQL, and Express, improving compliance validation efficiency.",
            "Scaled the compliance tool with Docker and Kubernetes, achieving 99% system availability.",
            "Enhanced release processes and production stability by implementing an Azure CI/CD pipeline.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Intermountain Health",
        icon: intermountain,
        iconBg: "#FFFFFF",
        date: "May 2020 - May 2021",
        points: [
            "Engineered an automation system for web form development using C, TSQL, and TFS, reducing front-end development time by 75%.",
            "Modernized the flagship product to fit current browser standards, introducing CRUD functionality using C# and ASP.NET.",
            "Developed web forms for the ePCR system using Gridbox, jQuery, JavaScript, HTML, and CSS.",
            "Created an internal xWiki for documentation, reducing onboarding time by 70%.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Netflix",
        icon: netflix,
        iconBg: "#FFFFFF",
        date: "Jan 2020 - May 2020",
        points: [
            "Designed application diagrams using LucidChart/Drawio and introduced automated test coverage with Mocha.",
            "Integrated an internal transcription application with Five9 API using Node.js, automating voicemail transcriptions across the company.",
            "Built a Microsoft Teams Bot for a voice recognition app using Node.js, GCP, Docker, and Kubernetes—reducing translation time by 99%.",
            "Collaborated in an agile team environment, participating in sprints and 100% of daily scrums.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };