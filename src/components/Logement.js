import '../styles/Logement.css'
import { useParams } from 'react-router-dom';
import Api from './Api'
import Slider from './Module_logement/Slide'
import Localisation from './Module_logement/Localisation'
import Propriétaire from './Module_logement/Propriétaire'

function Logement() {
    const data = Api();
    const idUrl = useParams();
    const loge = []
    data.forEach(function (res) {
        if (idUrl.id === res.id) {
            loge.push(res)
        }

    });
    console.log(loge)

    return (
        <>
            <Slider slides={loge} />
            <Localisation localise={loge} />
            <Propriétaire host={loge} />
        </>
    )
}
    export default Logement