import './App.css'
import Hero from "./components/sections/hero/Hero.tsx";

function App() {

    return (
        <div className="relative bg-[#101010]">
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

            <div className="relative">
                <Hero/>
            </div>
        </div>
    )
}

export default App
