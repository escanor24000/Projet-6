import '../styles/Logement.css'
import { useParams } from 'react-router-dom';
import Api from './Api'


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
        <div>
            {loge.map((log, id) => (
                <div>
                    <img src={loge.pictures} className='kasa-image-logement' />
                </div>
            ))}
        </div>

    )

}

export default Logement