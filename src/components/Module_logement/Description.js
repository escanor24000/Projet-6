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

            <div className={`description_conteneur ${active && "active"}`}>
                <div className="description_conteneur-titre" onClick={handleToggle}>
                    <p className="description-titre">Description</p>
                    <img className='vectorHaut' src={vectorHaut} />
                </div>
                <div className="description_conteneur-texte">
                    {descrip.map((data, index) => (
                        <p className="description-texte" key={index}>{data.description}</p>
                    ))}
                </div>
            </div>

        </>
    )

}

export default Description