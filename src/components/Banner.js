import logo from '../assets/logo-kasa.png'
import '../styles/Banner.css'
import { Link } from 'react-router-dom'

function Banner() {
    const accueil = 'Accueil'
    const propos = 'A Propos'
    return (
        <>
        <div className='kasa-banner'>
            <img src={logo} alt='logo Kasa' className='kasa-logo' />
            <nav className='banner-nav'>
                <Link to="/" className='btn-accueil'>{accueil}</Link>
                <Link to="/A_popros" className='btn-propos'>{propos}</Link>
            </nav>
        </div>
        </>
    )
}

export default Banner