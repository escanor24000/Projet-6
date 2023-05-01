import { useParams } from 'react-router-dom'
import ApiImages from './ApiImages'
import Slider from './Module_logement/Slide'
import Localisation from './Module_logement/Localisation'
import Proprietaire from './Module_logement/Proprietaire'
import Note from './Module_logement/Note.js'
import Tags from './Module_logement/Tags'
import Description from './Module_logement/Description'
import Equipement from './Module_logement/Equipement'
import Api from './Api';
import '../styles/Logement.css'
import Erreur from "../components/Erreur.js";

function Logement() {
    const idUrl = useParams();
    const images = ApiImages(idUrl.id);
    const data = Api();
    console.log(data)
    const loge = []
    data.forEach(function (res) {
        if (idUrl.id === res.id) {
            loge.push(res)
        }

    });
    if (loge.length === 0) {
        return (<Erreur />)
    } else {
        console.log(loge)
        return (
            <>
                <Slider slides={images} />
                <div className='loge_conteneur'>
                    <div className='loge_conteneur-local-tag'>
                        <Localisation localise={loge} />
                        <Tags motcle={loge} />
                    </div>
                    <div className='conteneur-proprietaire-note'>
                        <Proprietaire host={loge} />
                        <Note note={loge} />
                    </div>
                </div>

                <div className='loge_descr-equip'>
                    <div className='loge-descr'>
                        <Description descrip={loge} />
                    </div>
                    <div className='loge-equip'>
                        <Equipement equip={loge} />
                    </div>
                </div>
            </>
        )
    }


}
export default Logement