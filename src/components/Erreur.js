import { Link } from "react-router-dom"
import '../styles/erreur.css'

function Erreur() {
    return (
        <div className="erreur_conteneur">
            <p className="erreur-400">404</p>
            <p className="erreur-msg">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="erreur-btn">Retourner sur la page d’accueil</Link>
        </div>
    )
}
export default Erreur