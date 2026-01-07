import {Element} from 'react-scroll';
import ServiceCard from "@/components/cards/service-card/ServiceCard.tsx";
import {faCode, faMobileScreen, faServer} from "@fortawesome/free-solid-svg-icons";

const services = [
    {
        id: 1,
        title: 'Android Development',
        description: 'Developing native, user-friendly Android apps',
        icon: faMobileScreen
    },
    {
        id: 2,
        title: 'Backend Development',
        description: 'Creating robust and scalable backend services',
        icon: faServer
    },
    {
        id: 3,
        title: 'Frontend Development',
        description: 'Building modern, responsive frontend interfaces',
        icon: faCode
    }
]

function Services() {
    return (
        <Element name="services" className="w-full">
            <section className="flex flex-col align-middle justify-center h-full">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center tracking-tight text-pretty sm:text-5xl capitalize">
                        What I do?
                    </h2>
                    <div
                        className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                content={service}
                                className="group"
                            >
                            </ServiceCard>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Services;