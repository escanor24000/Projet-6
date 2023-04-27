import '../../styles/Module_logement/Description.css'
import vectorHaut from '../../assets/vector-haut.png'
import Collapse from '../collapse'
const Description = ({ descrip }) => {
    return (
        <>
            {descrip.map((data, index) => (
                <Collapse titre="Description" vector={vectorHaut} key={index}>
                    <p className='explica-texte'>{data.description}</p>
                </Collapse>
            ))}
        </>
    )

}

export default Description