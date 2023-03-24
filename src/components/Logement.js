import '../styles/Logement.css'
import { useParams } from 'react-router-dom';
import ApiImages from './ApiImages'
import {useState,useEffect} from "react"
import Slider from './Module_logement/Slide'
import Localisation from './Module_logement/Localisation'
import Propriétaire from './Module_logement/Propriétaire'
import Tags from './Module_logement/Tags'
import Description from './Module_logement/Description';
import Equipement from './Module_logement/Equipement'

function Logement() {
    const idUrl = useParams();
    const images = ApiImages(idUrl.id);
    return (
        <Slider slides={images}/>
    )
}
export default Logement