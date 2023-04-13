import Banner from "../components/Banner.js";
import "../styles/Module_banner/Banner_a_propos.css"
import CorpPropos from "../components/CorpPropos"
import Footer from "../components/Footer.js"

function A_propos() {
    
    return (
        <div>
            <Banner/>
            <CorpPropos/>
            <Footer/>
        </div>
    )
}

export default A_propos;