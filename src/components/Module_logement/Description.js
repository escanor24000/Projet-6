import '../../styles/Module_logement/Description.css'
import vectorHaut from '../../assets/vector-haut.png'

const Description = ({ descrip }) => {
    return (
        <>
            {descrip.map((data) => (
                <div className="description_conteneur">
                    <div className="description_conteneur-titre">
                        <p className="description-titre">Description</p>
                        <img className='vectorHaut' src={vectorHaut}/>
                    </div>
                    <div className="description_conteneur-texte">
                        <div className="description_sous-conteneur-texte">
                            <p className="description-texte">{data.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}

export default Description