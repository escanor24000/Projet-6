import '../../styles/Module_logement/Equipement.css'
import vectorHaut from '../../assets/vector-haut.png'
import Collapse from '../collapse'

const Equipement = ({ equip }) => {
    return (
        <>
            {equip.map((data, index) => (
                <Collapse titre="Équipement" vector={vectorHaut} key={index}>
                    <div className='Equipement_sous-conteneur-texte'>
                        {data.equipments.map((equip, index) =>
                            <p className="Equipement-texte" key={index}>{equip}</p>
                        )}
                    </div>
                </Collapse>
            ))}
        </>
    )

}

export default Equipement