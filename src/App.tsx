import './App.css'
import Hero from "./components/sections/hero/Hero.tsx";
import About from "@/components/sections/about/About.tsx";
import StaggeredMenu from "@/components/menus/staggered-menu/StaggeredMenu.tsx";
import BackToTopButton from "@/components/buttons/back-to-top-button/BackToTopButton.tsx";

const menuItems = [
    {label: 'Home', ariaLabel: 'Hero section', link: 'hero'},
    {label: 'About', ariaLabel: 'About me section', link: 'about'}
];

function App() {

    return (
        <div className="relative min-h-screen overflow-hidden">
            <StaggeredMenu
                position="right"
                isFixed={true}
                items={menuItems}
                displaySocials={false}
                displayItemNumbering={false}
                changeMenuColorOnOpen={true}
            />
            <Hero/>
            <About/>

            <BackToTopButton/>
        </div>
    )
}

export default App