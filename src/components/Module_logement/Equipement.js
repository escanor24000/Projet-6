import '../../styles/Module_logement/Equipement.css'
import vectorHaut from '../../assets/vector-haut.png'

const Equipement = ({equip}) => {
    return (
        <>
            {equip.map((data) => (
                <div className="Equipement_conteneur">
                    <div className="Equipement_conteneur-titre">
                        <p className="Equipement-titre">Équipement</p>
                        <img className='vectorHaut' src={vectorHaut}/>
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