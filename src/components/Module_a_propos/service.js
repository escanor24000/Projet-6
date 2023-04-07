import { useState } from "react"
import vectorHaut from '../../assets/vector-haut.png'
function Service({ titre, texte }) {
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
            <div className='dropdown-explica-service'>
                <div className='explica-conteneur-texte-service'>
                    <p className='explica-texte'>{texte}</p>
                </div>
            </div>
        </article>
    )
}
export default Service