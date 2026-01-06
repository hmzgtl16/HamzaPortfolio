import './App.css'
import Hero from "./components/sections/hero/Hero.tsx";
import About from "@/components/sections/about/About.tsx";
import StaggeredMenu from "@/components/menus/staggered-menu/StaggeredMenu.tsx";
import BackToTopButton from "@/components/buttons/back-to-top-button/BackToTopButton.tsx";
import Services from "@/components/sections/services/Services.tsx";
import Projects from "@/components/sections/projects/Projects.tsx";
import Contact from "@/components/sections/contact/Contact.tsx";

function App() {

    const menuItems = [
        {
            label: 'Home',
            ariaLabel: 'Hero section',
            link: 'hero'
        },
        {
            label: 'About',
            ariaLabel: 'About me section',
            link: 'about'
        },
        {
            label: 'Services',
            ariaLabel: 'Services section',
            link: 'services'
        },
        {
            label: 'Projects',
            ariaLabel: 'Projects section',
            link: 'projects'
        },
        {
            label: 'Contact',
            ariaLabel: 'Contact section',
            link: 'contact'
        }
    ];

    return (
        <div className="min-h-screen overflow-hidden">
            <StaggeredMenu
                position="right"
                isFixed={true}
                items={menuItems}
                displaySocials={false}
                displayItemNumbering={false}
                changeMenuColorOnOpen={true}
            />

            <main className="flex flex-col divide-y divide-neutral-800 h-full px-3">
                <Hero/>
                <About/>
                <Services/>
                <Projects/>
                <Contact/>
            </main>

            <BackToTopButton/>
        </div>
    )
}

export default App