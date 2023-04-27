import photo from '../assets/img_propos.png'
import '../styles/CorpPropos.css'
import vectorHaut from '../assets/vector-haut.png'
import Collapse from './collapse.js'
import ImageBanner from './ImageBanner'
function CorpPropos() {
    return (
        <section className='section_a_propos'>
            <ImageBanner image={photo} alt='photo de montagne avec une forêt en bas' className='kasa_photo-propos' />
            <div className='a_propos-containe-collapse'>
                <Collapse titre="Fiabilité" vector={vectorHaut}><p className='texte-a-propos'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées  par nos équipes.</p></Collapse>

                <Collapse titre="Respect" vector={vectorHaut}><p className='texte-a-propos'>La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></Collapse>

                <Collapse titre="Service" vector={vectorHaut}><p className='texte-a-propos'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                    N'hésitez pas à nous contacter si vous avez la moindre question.</p></Collapse>

                <Collapse titre="Sécurité" vector={vectorHaut}><p className='texte-a-propos'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également
                    des ateliers sur la sécurité domestique pour nos hôtes.</p></Collapse>
            </div>
        </section>
    )
}

export default CorpPropos