import {faEnvelope, faFileLines} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import AnimatedContent from "@/components/animations/animated-content/AnimatedContent.tsx";
import FadeContent from "@/components/animations/fade-content/FadeContent.tsx";
import {Element} from 'react-scroll';

function Hero() {
    const socialsLinks = [
        {
            key: 1,
            href: "mailto:hamza.gattal.16@gmail.com",
            icon: faEnvelope,
            label: "Email",
            external: false,
        },
        {
            key: 2,
            href: "https://github.com/hmzgtl16/",
            icon: faGithub,
            label: "Github",
            external: true,
        },
        {
            key: 3,
            href: "https://www.linkedin.com/in/hmzgtl16/",
            icon: faLinkedin,
            label: "Linkedin",
            external: true,
        },
        {
            key: 4,
            href: "/resume.pdf",
            icon: faFileLines,
            label: "Resume",
            download: "Resume-HamzaGATTAL.pdf",
            external: false,
        },
    ];

    return (
        <Element name="hero" className="min-h-screen w-full">
            <section className="flex min-h-screen items-center justify-center">
                <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32 lg:py-40">
                    <div className="text-center">
                        <AnimatedContent delay={0.4} distance={220} duration={2} threshold={0.25}>
                            <h1 className="text-center font-serif text-5xl font-bold leading-tight md:text-6xl">
                                Hamza GATTAL
                            </h1>
                        </AnimatedContent>

                        <AnimatedContent delay={0.8} distance={120} duration={1.75} threshold={0.25}>
                            <p className="mt-8 font-sans text-2xl font-medium tracking-wide">
                                Android Developer
                            </p>
                        </AnimatedContent>

                        <FadeContent delay={1.5} duration={1.75} threshold={0.25}>
                            <div className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
                                {socialsLinks.map((link) => {
                                    const isExternal = link.external;
                                    return (
                                        <a
                                            href={link.href}
                                            key={link.key}
                                            className="rounded-xl border p-5 text-foreground/40 transition-all duration-300 hover:scale-110 hover:border-foreground hover:bg-foreground/10 hover:text-foreground"
                                            aria-label={link.label}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noopener noreferrer" : undefined}
                                            download={link.download ?? undefined}
                                        >
                                            <FontAwesomeIcon icon={link.icon} size="2xl" />
                                        </a>
                                    );
                                })}
                            </div>
                        </FadeContent>
                    </div>
                </div>
            </section>
        </Element>
    );
}

export default Hero;
