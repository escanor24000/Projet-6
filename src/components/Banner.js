import logo from '../assets/logo-kasa.png'
import '../styles/Banner.css'
import { useState } from "react"
import { Link } from 'react-router-dom'

function Banner() {
    const accueil = 'Accueil'
    const propos = 'A Propos'

    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)

    const handleToggle = e => {
        setActive(!active)
        console.log(e)
    }

    const handleToggle1 = e => {
        setActive1(!active1)
        console.log(e)
    }

    return (
        <>
            <div className='kasa-banner'>
                <img src={logo} alt='logo Kasa' className='kasa-logo' />
                <nav className={`banner-nav ${active && "active"} ${active1 && "active1"}`}>
                    <Link to="/" className='btn-accueil' onClick={handleToggle}>{accueil}</Link>
                    <Link to="/A_popros" className='btn-propos' onClick={handleToggle1}>{propos}</Link>
                </nav>
            </div>
        </>
    )
}

export default Banner