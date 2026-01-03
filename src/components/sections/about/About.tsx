import LogoLoop from "@/components/sliders/logo-loop/LogoLoop.tsx";

const techLogos = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
        alt: "android"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg",
        alt: "jetpackcompose"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
        alt: "kotlin"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ktor/ktor-original.svg",
        alt: "ktor"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        alt: "java"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        alt: "spring"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        alt: "html5"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        alt: "css3"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "typescript"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        alt: ""
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        alt: "bootstrap"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        alt: "react"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
        alt: "angular"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        alt: "postgresql"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        alt: "mongodb"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        alt: "git"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        alt: "github"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        alt: "docker"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
        alt: "gradle"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
        alt: "intellij"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
        alt: "android-studio"
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg",
        alt: "webstorm"
    }

]

function About() {
    return (
        <section id="about" className="flex flex-col">
            <div className="flex flex-col justify-center mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <div className="text-center">
                        <h2 className="text-4xl font-serif font-bold tracking-tight text-pretty sm:text-5xl capitalize">
                            About me
                        </h2>
                        <p className="mt-4 text-2xl font-sans font-medium tracking-wide text-foreground/75">
                            A brief introduction about me and my interest.
                        </p>
                    </div>
                </div>
                <div className="mx-auto my-8 max-w-2xl py-5 sm:my-8 sm:py-8 lg:mx-0">
                    <div
                        className="text-center text-lg font-sans font-normal tracking-wide leading-relaxe space-y-6 max-w-4xl">
                        <p className="text-xl">
                            I’m an Android developer focused on building clean, modern, and maintainable mobile
                            applications. I enjoy working with Kotlin and Jetpack Compose to create user interfaces
                            that feel intuitive, scalable, and easy to evolve over time.
                        </p>
                        <p className="text-xl">
                            I care deeply about architecture and code quality, with a strong emphasis on MVVM and clean
                            architecture principles. While Android is my main focus, I’m also comfortable working on
                            backend services using Spring Boot, which helps me build well-integrated, end-to-end
                            solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mx-auto my-16 max-w-7xl p-6 lg:p-8">
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={60}
                        gap={60}
                        hoverSpeed={20}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#101010"
                        ariaLabel="Technology partners"
                    />
            </div>
        </section>
    )
}

export default About;