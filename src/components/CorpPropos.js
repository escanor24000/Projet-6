import photo from '../assets/img_propos.png'
import '../styles/CorpPropos.css'
import Fiabilite from './Module_a_propos/fiabilite';
import Respect from './Module_a_propos/respect';
import Securite from './Module_a_propos/securite';
import Service from './Module_a_propos/service';
function CorpPropos() {
    return (
        <section>
            <img src={photo} alt='vue de de bord de mer' className='kasa_photo-propos' />

            <Fiabilite titre="Fiabilité" texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                            et toutes les informations sont régulièrement vérifiées  par nos équipes."/>

            <Respect titre="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

            <Service titre="Service" texte="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                        N'hésitez pas à nous contacter si vous avez la moindre question."/>

            <Securite titre="Sécurité" texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également
                            des ateliers sur la sécurité domestique pour nos hôtes."/>
        </section>
    )
}

export default CorpPropos