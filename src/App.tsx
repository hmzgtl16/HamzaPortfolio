import './App.css'
import DotGrid from "./components/backgrounds/dot-grid/DotGrid.tsx";

function App() {

    return (

    <div className="bg-zinc-950 w-full h-screen relativee">
        <DotGrid
            dotSize={3.5}
            gap={25}
            baseColor="#ffffff"
            activeColor="#1a0863"
            proximity={150}
            shockRadius={250}
            shockStrength={15}
            resistance={2000}
            returnDuration={2}
        />
    </div>
    )
}

export default App
