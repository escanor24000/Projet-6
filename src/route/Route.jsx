import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import A_propos from "../pages/A_propos"
import FicheLogement from "../pages/FicheLogement"
import Pages404 from "../pages/Erreur"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A_popros" element={<A_propos />} />
            <Route path="/Logement/:id" element={<FicheLogement />} />
            <Route path="/*" element={<Pages404 />} />
        </Routes>
    )
}

export default App;
