import React from "react"
import { useState } from "react"
import '../styles/Colapse.css'

function Collapse(props) {
   
    const [active, setActive] = useState(false);

    const toggleAccordion = e => {
        setActive(!active)
    };

    return (
        <article className={`dropdown ${active && "active"}`}>
                <div className='dropdown-barre' onClick={toggleAccordion}>
                    <p className="barre-titre">{props.titre}</p>
                    <img className='vectorHaut' src={props.vector} alt="vector_haut"/>
                </div>
                <div className='dropdown-explica'>
                        {props.children}
                </div>
            </article>
    )
}
export default Collapse