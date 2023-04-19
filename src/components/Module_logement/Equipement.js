import '../../styles/Module_logement/Equipement.css'
import vectorHaut from '../../assets/vector-haut.png'
import { useState } from "react"

const Equipement = ({ equip }) => {
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
        console.log(e)
    }

    return (
        <>
            {equip.map((data) => (
                <div className={`Equipement_conteneur ${active && "active"}`}>
                    <div className="Equipement_conteneur-titre" onClick={handleToggle}>
                        <p className="Equipement-titre">Équipement</p>
                        <img className='vectorHaut' src={vectorHaut} />
                    </div>
                    <div className="Equipement_conteneur-texte">
                        <div className='Equipement_sous-conteneur-texte'>
                        {data.equipments.map(equip =>
                            <p className="Equipement-texte">{equip}</p>
                        )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}

export default Equipement