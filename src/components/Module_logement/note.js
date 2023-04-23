import '../../styles/Module_logement/Note.css'
import Star from './Star.js'

const createArray = length => [...Array(length)];
const Note = ({ note }) => {
    const nbCouleur = [];

    { note.map((data) => {
            const nb = parseInt(data.rating)
            nbCouleur.push(nb);
        })}

    return (
        <div className='note_containe'>
            {createArray(5).map((nb,i) => (
                <Star key={i} selected={nbCouleur > i} />
            ))}
        </div>
    )
}
export default Note         