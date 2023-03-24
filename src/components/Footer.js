import '../styles/Footer.css'
import logo from '../assets/logo_blanc.png'

function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={logo} alt='vue de de bord de mer' className='footer-logo' />
            <p className='footer-texte'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer