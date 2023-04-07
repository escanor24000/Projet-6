import photo from '../assets/img_propos.png'
import '../styles/CorpPropos.css'
import vectorHaut from '../assets/vector-haut.png'
import React, { useState, useRef, useEffect } from "react";
function CorpPropos() {
    const [active, setActive] = useState(false);

    const toggleAccordion = e => {
        setActive(!active)
    };

    return (
        <section>
            <img src={photo} alt='vue de de bord de mer' className='kasa_photo-propos' />

            <article className={`propos_dropdown ${active && "active"}`}>
                <div className='dropdown-barre' onClick={toggleAccordion}>
                    <p className='barre-titre'>Fiabilité</p>
                    <img className='explica-vectorHaut' src={vectorHaut} />
                </div>
                <div className='dropdown-explica-fiabilite'>
                    <div className='explica-conteneur-texte-fiabilite'>
                        <p className='explica-texte'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                            et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>
                </div>
            </article>

            <article className={`propos_dropdown ${active && "active"}`}>
                <div className='dropdown-barre' onClick={toggleAccordion}>
                    <p className='barre-titre'>Respect</p>
                    <img className='explica-vectorHaut' src={vectorHaut} />
                </div>
                <div className='dropdown-explica-respect'>
                    <div className='explica-conteneur-texte-respect'>
                        <p className='explica-texte'>La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
            </article>


            <article className={`propos_dropdown ${active && "active"}`}>
                <div className='dropdown-barre' onClick={toggleAccordion}>
                    <p className='barre-titre'>Service</p>
                    <img className='explica-vectorHaut' src={vectorHaut} />
                </div>
                <div className='dropdown-explica-service'>
                    <div className='explica-conteneur-texte-service'>
                        <p className='explica-texte'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                            N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                </div>
            </article>

            <article className={`propos_dropdown ${active && "active"}`}>
                <div className='dropdown-barre' onClick={toggleAccordion}>
                    <p className='barre-titre'>Sécurité</p>
                    <img className='explica-vectorHaut' src={vectorHaut} />
                </div>
                <div className='dropdown-explica-securite'>
                    <div className='explica-conteneur-texte-securite'>
                        <p className='explica-texte'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également
                            des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default CorpPropos