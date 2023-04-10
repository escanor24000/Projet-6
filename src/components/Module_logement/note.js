import etoile from '../../assets/etoile.png'
import '../../styles/Module_logement/Note.css'
function Note(){
    
return(
    <div className='note_containe'>
        <div className='containe-etoile'>
        <img className='etoile' src={etoile}/>
        </div>
        <div className='containe-etoile'>
        <img className='etoile' src={etoile}/>
        </div>
        <div className='containe-etoile'>
        <img className='etoile' src={etoile}/>
        </div>
        <div className='containe-etoile'>
        <img className='etoile' src={etoile}/>
        </div>
        <div className='containe-etoile'>
        <img className='etoile' src={etoile}/>
        </div>
    </div>
)
}
    export default Note         