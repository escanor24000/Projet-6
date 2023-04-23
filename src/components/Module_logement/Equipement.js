import '../../styles/Module_logement/Equipement.css'
import vectorHaut from '../../assets/vector-haut.png'
import { useState } from "react"

const Equipement = ({ equip }) => {
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
    }

    return (
        <>
            <div className={`Equipement_conteneur ${active && "active"}`}>
                <div className="Equipement_conteneur-titre" onClick={handleToggle}>
                    <p className="Equipement-titre">Équipement</p>
                    <img className='vectorHaut' src={vectorHaut} />
                </div>
                <div className="Equipement_conteneur-texte">
                    {equip.map((data, index) => (
                        <div className='Equipement_sous-conteneur-texte' key={index}>
                            {data.equipments.map((equip, index) =>
                                <p className="Equipement-texte" key={index} >{equip}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )

}

export default Equipement