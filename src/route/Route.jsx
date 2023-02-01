import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import A_propos from "../pages/A_propos"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/A_popros" element={<A_propos/>} />
        </Routes>
    )
}

export default App;
