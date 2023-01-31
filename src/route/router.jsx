import {Routes, Route} from "react-router-dom"
import App from "../pages/App"
import A_propos from "../pages/A_propos"

function router(){
    return(
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/A_popros" element={<A_propos/>} />
        </Routes>
    )
}

export default router;