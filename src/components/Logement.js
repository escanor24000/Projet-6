import '../styles/Logement.css'
import { useParams } from 'react-router-dom';
import Api from './Api'
import {useState,useEffect} from "react"
import Slider from './Module_logement/Slide'
import Localisation from './Module_logement/Localisation'
import Propriétaire from './Module_logement/Propriétaire'
import Tags from './Module_logement/Tags'
import Description from './Module_logement/Description';
import Equipement from './Module_logement/Equipement'

function Logement() {
    const [images, setImages] = useState([]);
    const data = Api();
    const idUrl = useParams();
    useEffect(() => {
        if (data != undefined) {
            
            const loge = []
            data.forEach(function (res) {
                if (idUrl.id === res.id) {
                    loge.push(res)
                }

            });
            if(loge.length>0){
            setImages(loge[0].pictures);
            }
            console.log(data);
        }
    }, []);

    return (

        <Slider slides={images}/>

    )
}
export default Logement