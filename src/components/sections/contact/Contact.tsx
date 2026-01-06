import {Element} from 'react-scroll';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Contact() {

    const sochialLinks = [
        {
            id: 1,
            icon: faEnvelope,
            url: 'mailto:hamza.gattal.16@gmail.com',
            label: 'Mail',
        },
        {
            id: 2,
            icon: faGithub,
            url: 'https://github.com/hmzgtl16/',
            label: 'GitHub',
        },
        {
            id: 3,
            icon: faLinkedin,
            url: 'https://www.linkedin.com/in/hmzgtl16/',
            label: 'Linkedin',
        },
        {
            id: 4,
            icon: faWhatsapp,
            url: 'https://wa.me/213540200311',
            label: 'Whatsapp',
        },
        {
            id: 5,
            icon: faTelegram,
            url: 'https://t.me/hamza_gattal/',
            label: 'Telegram',
        }
    ];

    return (
        <Element name="contact" className="w-full">
            <section className="flex flex-col align-middle justify-center h-full">
                <div className="mx-auto max-w-2xl px-4 py-16 space-y-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-3xl lg:text-center">
                        <h2 className="text-4xl font-serif font-bold tracking-tight text-pretty sm:text-5xl capitalize">
                            Get In Touch
                        </h2>
                        <p className="mt-6 text-2xl font-sans font-medium text-foreground/60 tracking-wide">
                            Don’t hesitate to get in touch if you have any questions or would like to connect.
                        </p>
                    </div>
                    <div className="mx-auto max-w-3xl lg:text-center">
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                            {sochialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    className="w-18 h-18 p-4 inline-flex items-center justify-center gap-x-4 border border-neutral-800 bg-neutral-900 rounded-full hover:bg-neutral-800 hover:scale-105 transition-all duration-300"
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={link.icon} size="2xl"/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Contact