import '../styles/Footer.css'
import logo from '../assets/logo_blanc.png'

function Footer() {
    return (
        <footer className='kasa-footer'>
            <img src={logo} alt='kasa en blanc' className='footer-logo'/>
            <p className='footer-texte'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer