import {Element} from 'react-scroll';
import ProjectCard from "@/components/cards/project-card/ProjectCard.tsx";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Projects() {

    const projects = [
        {
            id: 1,
            title: 'HPoke',
            description:
                'A clean-architecture Android application built to explore Pokémon data, offering a smooth and offline-friendly experience powered by the PokeAPI and modern Android development practices.',
            image: 'src/assets/hpoke.png',
            tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Modular Architecture', 'Gradle Convention Plugin', 'Offline First'],
            repository: 'https://github.com/hmzgtl16/HPoke',
            website: ''
        },
        {
            id: 2,
            title: 'HBookStore',
            description:
                'A comprehensive Spring Boot–based RESTful API for managing books, authors, customers, and reviews, featuring secure JWT authentication and a clean, domain-driven architecture.',
            image: 'src/assets/hbookstore.png',
            tags: ['Spring Boot', 'Java', 'REST API', 'JWT', 'DDD', 'PostgreSQL'],
            repository: 'https://github.com/hmzgtl16/HBookStore',
            website: ''
        },
        {
            id: 3,
            title: 'Personal Portfolio',
            description:
                'A personal portfolio website designed to showcase my projects, skills, and services, with a clean layout, responsive design, and a focus on clarity and performance.',
            image: 'src/assets/portfolio.png',
            tags: ['React', 'Tailwind CSS', 'Vite'],
            repository: 'https://github.com/hmzgtl16/HamzaPortfolio',
            website: 'https://hamzagattal.vercel.app/'
        },
        {
            id: 4,
            title: 'HBank-API',
            description:
                'A banking RESTful API built with Spring Boot and Kotlin, designed to handle core banking operations with a focus on security, scalability, and clean architecture.',
            image: 'src/assets/hbank.png',
            tags: ['Spring Boot', 'Kotlin', 'REST API', 'MVC', 'JPA', 'PostgreSQL'],
            repository: 'https://github.com/hmzgtl16/HBank-API',
            website: ''
        },
        {
            id: 5,
            title: 'HNotes',
            description:
                'A modular Android application designed for note-taking, built with a focus on clean architecture, scalability, and maintainable code.',
            image: 'src/assets/hnotes.png',
            tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Modular Architecture', 'Notes App'],
            repository: 'https://github.com/hmzgtl16/HNotes',
            website: ''
        },
        {
            id: 6,
            title: 'White Label Casinos Project',
            description:
                'A multi-language website built with Angular and Bootstrap, provide a responsive, user-friendly experience across different locales.',
            image: 'src/assets/wlcp.png',
            tags: ['Angular', 'Bootstrap 5', 'i18n', 'Vite'],
            repository: 'https://github.com/hmzgtl16/WhiteLabelCasinosProject',
            website: 'https://www.whitelabelproject.net/'
        },
    ]

    return (
        <Element name="projects" className="w-full">
            <section className="flex flex-col align-middle justify-center h-full">
                <div className="mx-auto max-w-2xl px-4 py-16 space-y-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                        <h2 className="text-4xl font-serif font-bold tracking-tight text-pretty sm:text-5xl capitalize">
                            My Projects
                        </h2>
                        <p className="mt-6 text-2xl font-sans font-medium text-foreground/60 tracking-wide">
                            Examples of my work in Android, backend, and frontend development, emphasizing quality,
                            performance, and thoughtful system design.
                        </p>
                    </div>
                    <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {projects.map((project) => (
                            <ProjectCard
                                content={project}
                                className="group"
                            />
                        ))}
                    </div>
                    <div className="mx-auto" >
                        <a
                            href="https://github.com/hmzgtl16?tab=repositories"
                            className="mx-auto w-full h-12 p-2 inline-flex items-center justify-center gap-x-4 border border-neutral-800 bg-neutral-900 rounded-full hover:bg-neutral-800 hover:scale-105 transition-all duration-300"
                            aria-label="GitHub Repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>View more on</span>
                            <FontAwesomeIcon icon={faGithub} size="xl"/>
                        </a>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Projects;