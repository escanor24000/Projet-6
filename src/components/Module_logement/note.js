import etoile from '../../assets/etoile.png'
import '../../styles/Module_logement/Note.css'
import Star from './Star.js'

const createArray = length => [...Array(length)];
const Note = ({ note }) => {

    { note.map((data) => {
            const nb = parseInt(data.rating)
            console.log(nb)
        })}

    return (
        <div className='note_containe'>
            {createArray(5).map((n, i) => (
                <Star key={i} selected={3 > i} />
            ))}
        </div>
    )
}
export default Note         