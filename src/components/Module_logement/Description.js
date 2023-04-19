import '../../styles/Module_logement/Description.css'
import vectorHaut from '../../assets/vector-haut.png'
import { useState } from "react"

const Description = ({ descrip }) => {
    const [active, setActive] = useState(false)
    
    const handleToggle = e => {
        setActive(!active)
      }
    return (
        <>
            {descrip.map((data) => (
                <div className={`description_conteneur ${active && "active"}`}>
                    <div className="description_conteneur-titre" onClick={handleToggle}>
                        <p className="description-titre">Description</p>
                        <img className='vectorHaut' src={vectorHaut}/>
                    </div>
                    <div className="description_conteneur-texte">
                        {/*<div className="description_sous-conteneur-texte">*/}
                            <p className="description-texte">{data.description}</p>
                        {/*</div>*/}
                    </div>
                </div>
            ))}
        </>
    )

}

export default Description