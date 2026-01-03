import './App.css'
import Hero from "./components/sections/hero/Hero.tsx";
import About from "@/components/sections/about/About.tsx";

function App() {

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/*<div className="absolute inset-0 w-full h-full">
                <DotGrid
                    dotSize={3.5}
                    gap={30}
                    baseColor="#dfdfdf"
                    activeColor="#ffffff"
                    proximity={150}
                    shockRadius={250}
                    shockStrength={15}
                    resistance={2000}
                    returnDuration={2}
                />
            </div>*/}
                <Hero/>
                <About/>
        </div>
    )
}

export default App
