import { Link } from "react-router-dom"

function Erreur() {
    return (
        <div className='kasa-erreur'>
            <p>400</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}
export default Erreur