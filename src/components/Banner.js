import logo from '../assets/logo-kasa.png'
import '../styles/Banner.css'

function Banner() {
    const accueil = 'Accueil'
    const propos = 'A Propos'
    return (
        <div className='kasa-banner'>
            <img src={logo} alt='logo Kasa' className='kasa-logo' />
            <div classename='banner-nav'>
                <p className='btn-accueil'>{accueil}</p>
                <p className='btn-propos'>{propos}</p>
            </div>
        </div>
    )
}

export default Banner