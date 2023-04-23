import logo from '../assets/logo-kasa.png'
import '../styles/Banner.css'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

function Banner() {
    const accueil = 'Accueil'
    const propos = 'A Propos'
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <>
            <header className='kasa-banner'>
                <img src={logo} alt='logo Kasa en rouge' className='kasa-logo' />
                <nav className='banner-nav'>
                    <div className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/" className='btn-accueil'>{accueil}</Link>
                    </div>
                    <div className={splitLocation[1] === "A_popros" ? "active" : ""}>
                    <Link to="/A_popros" className='btn-propos'>{propos}</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Banner