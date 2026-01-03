import {faEnvelope, faFileLines} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import AnimatedContent from "@/components/ animations/animated-content/AnimatedContent.tsx";
import FadeContent from "@/components/ animations/fade-content/FadeContent.tsx";

function Hero() {
    return (
        <section id="hero" className="flex h-screen items-center justify-center">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <AnimatedContent
                        delay={0.4}
                        distance={300}
                        duration={2}
                        threshold={0.25}
                    >
                        <h1 className="text-center text-5xl font-serif font-bold leading-tight md:text-6xl">
                            Hamza GATTAL
                        </h1>
                    </AnimatedContent>
                    <AnimatedContent
                        delay={0.8}
                        distance={210}
                        duration={1.75}
                        threshold={0.25}
                    >
                        <p className="mt-8 text-2xl font-sans font-medium tracking-wide">
                            Android Developer
                        </p>
                    </AnimatedContent>

                    <FadeContent
                        delay={1.5}
                        duration={1.75}
                        threshold={0.25}
                    >
                        <div className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
                            <a
                                href="mailto:hamza.gattal.16@gmail.com"
                                className="p-5 rounded-xl border text-foreground/40 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground hover:border-foreground hover:scale-110"
                                aria-label="Email"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
                            </a>
                            <a
                                href="https://github.com/hmzgtl16/"
                                className="p-5 rounded-xl border text-foreground/40 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground hover:border-foreground hover:scale-110"
                                aria-label="Github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} size="2xl"/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hmzgtl16/"
                                className="p-5 rounded-xl border text-foreground/40 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground hover:border-foreground hover:scale-110"
                                aria-label="Linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Resume-HamzaGATTAL.pdf"
                                className="p-5 rounded-xl border text-foreground/40 transition-all duration-300 hover:bg-foreground/10 hover:text-foreground hover:border-foreground hover:scale-110"
                                aria-label="Resume"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faFileLines} size="2xl"/>
                            </a>
                        </div>
                    </FadeContent>

                </div>
            </div>
        </section>
    )
}


export default Hero;