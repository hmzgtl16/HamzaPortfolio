import LogoLoop from "@/components/sliders/logo-loop/LogoLoop.tsx";
import { Element } from 'react-scroll';

const techLogos = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
        alt: "android",
        title: "Android"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg",
        alt: "jetpackcompose",
        title: "Jetpack Compose"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
        alt: "kotlin",
        title: "Kotlin"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ktor/ktor-original.svg",
        alt: "ktor",
        title: "Ktor"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        alt: "java",
        title: "Java"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        alt: "spring",
        title: "Spring Boot"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        alt: "html5",
        title: "HTML5"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        alt: "css3",
        title: "CSS3"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "typescript",
        title: "TypeScript"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        alt: "tailwindcss",
        title: "Tailwind CSS"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        alt: "bootstrap",
        title: "Bootstrap"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        alt: "react",
        title: "React"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        alt: "angular",
        title: "Angular"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        alt: "postgresql",
        title: "PostgreSQL"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        alt: "mongodb",
        title: "MongoDB"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        alt: "git",
        title: "Git"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        alt: "github",
        title: "GitHub"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        alt: "docker",
        title: "Docker"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
        alt: "gradle",
        title: "Gradle"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
        alt: "intellij",
        title: "IntelliJ IDEA"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
        alt: "android-studio",
        title: "Android Studio"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg",
        alt: "webstorm",
        title: "WebStorm"
    }
]

function About() {
    return (
        <Element name="about" className="w-full h-screen">
            <section className="flex flex-col align-middle justify-center h-full">
            <div className="flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <div className="text-center">
                        <h2 className="text-4xl font-serif font-bold tracking-tight text-pretty sm:text-5xl capitalize">
                            About me
                        </h2>
                        <p className="mt-4 text-2xl font-sans font-medium tracking-wide text-foreground/75">
                            A brief introduction about me and my interest.
                        </p>
                    </div>
                </div>
                <div className="mx-auto my-6 max-w-6xl py-4 sm:my-8 sm:py-8 lg:mx-0">
                    <div
                        className="text-center text-lg font-sans font-normal tracking-wide leading-relaxe space-y-6 max-w-4xl">
                        <p className="text-2xl">
                            I’m an Android developer focused on building modern, maintainable mobile applications using Kotlin and Jetpack Compose. I care deeply about clean architecture, scalability, and writing code that remains readable and testable as projects grow.
                        </p>
                        <p className="text-2xl">
                            In addition to Android development, I have experience with backend development using Spring Boot, REST APIs, and PostgreSQL, as well as contributing to frontend development to support well-integrated, end-to-end solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-auto my-2 max-w-7xl p-2 lg:p-4">
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={40}
                    gap={60}
                    hoverSpeed={60}
                    fadeOut
                    fadeOutColor="#101010"
                    ariaLabel="Technologies"
                    scaleOnHover={false}
                />
            </div>
        </section>
        </Element>
    )
}

export default About;