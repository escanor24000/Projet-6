import React from "react"
import { useState } from "react"
import vectorHaut from '../../assets/vector-haut.png'

function Fiabilite({ titre, texte }) {
   
    const [active, setActive] = useState(false);

    const toggleAccordion = e => {
        setActive(!active)
    };

    return (
        <article className={`propos_dropdown ${active && "active"}`}>
                <div className='dropdown-barre' onClick={toggleAccordion}>
                    <p className='barre-titre'>{titre}</p>
                    <img className='explica-vectorHaut' src={vectorHaut} />
                </div>
                <div className='dropdown-explica-fiabilite'>
                    <div className='explica-conteneur-texte-fiabilite'>
                        <p className='explica-texte'>{texte}</p>
                    </div>
                </div>
            </article>
    )
}
export default Fiabilite