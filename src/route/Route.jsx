import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Apropos from "../pages/Apropos"
import FicheLogement from "../pages/FicheLogement"
import Pages404 from "../pages/Pages404"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Apopros" element={<Apropos />} />
            <Route path="/Logement/:id" element={<FicheLogement />} />
            <Route path="/*" element={<Pages404 />} />
        </Routes>
    )
}

export default App;
