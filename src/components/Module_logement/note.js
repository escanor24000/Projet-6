import etoile from '../../assets/etoile.png'
import '../../styles/Module_logement/Note.css'

const Note = ({ note }) => {

    {
        note.map((data) => {
            const nb = parseInt(data.rating)
            //console.log(nb)
        })
    }

    return (
        <div className='note_containe'>
            <div className='containe-etoile'>
                <img className='etoile' src={etoile} />
            </div>
            <div className='containe-etoile'>
                <img className='etoile' src={etoile} />
            </div>
            <div className='containe-etoile'>
                <img className='etoile' src={etoile} />
            </div>
            <div className='containe-etoile'>
                <img className='etoile' src={etoile} />
            </div>
            <div className='containe-etoile'>
                <img className='etoile' src={etoile} />
            </div>
        </div>
    )
}
export default Note         