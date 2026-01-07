import {Element} from 'react-scroll';
import ProjectCard from "@/components/cards/project-card/ProjectCard.tsx";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HPoke from '/src/assets/hpoke.png';
import HBookStore from '/src/assets/hbookstore.png';
import HPortfolio from '/src/assets/hportfolio.png';
import HBank from '/src/assets/hbank.png';
import HNotes from '/src/assets/hnotes.png';
import WLCP from '/src/assets/wlcp.png';

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'HPoke',
            description: 'Android app for exploring Pokémon data with offline-first architecture and modern Jetpack Compose UI.',
            image: HPoke,
            tags: ['Android', 'Kotlin', 'Jetpack Compose'],
            repository: 'https://github.com/hmzgtl16/HPoke',
            website: ''
        },
        {
            id: 2,
            title: 'HBookStore',
            description: 'Spring Boot REST API for book management with JWT authentication and domain-driven design.',
            image: HBookStore,
            tags: ['Spring Boot', 'Java', 'REST API', 'JWT'],
            repository: 'https://github.com/hmzgtl16/HBookStore',
            website: ''
        },
        {
            id: 3,
            title: 'Personal Portfolio',
            description: 'Responsive React portfolio showcasing projects and skills with clean, performant design.',
            image: HPortfolio,
            tags: ['React', 'Tailwind CSS', 'Vite'],
            repository: 'https://github.com/hmzgtl16/HamzaPortfolio',
            website: 'https://hamzagattal.vercel.app/'
        },
        {
            id: 4,
            title: 'HBank-API',
            description: 'Kotlin-based banking REST API built with Spring Boot, featuring secure and scalable architecture.',
            image: HBank,
            tags: ['Spring Boot', 'Kotlin', 'REST API', 'JPA'],
            repository: 'https://github.com/hmzgtl16/HBank-API',
            website: ''
        },
        {
            id: 5,
            title: 'HNotes',
            description: 'Modular Android note-taking app built with clean architecture and Jetpack Compose.',
            image: HNotes,
            tags: ['Android', 'Kotlin', 'Jetpack Compose'],
            repository: 'https://github.com/hmzgtl16/HNotes',
            website: ''
        },
        {
            id: 6,
            title: 'White Label Casinos Project',
            description: 'Multi-language Angular website with responsive Bootstrap design and internationalization support.',
            image: WLCP,
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
                    <div
                        className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                content={project}
                                className="group"
                            />
                        ))}
                    </div>

                    <div className="mx-auto">
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