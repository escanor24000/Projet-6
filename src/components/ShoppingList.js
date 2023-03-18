import '../styles/ShoppingList.css'
import photo from '../assets/img_kasa.png'
import Api from './Api'
import { Link } from 'react-router-dom'

function ShoppingList() {
const data = Api();
console.log(data)
    return (
        <div className='kasa-shoppinglist'>
            <div>
                <img src={photo} alt='vue de de bord de mer' className='kasa-photo' />
                <div className='kasa-box-text-photo'>
                    <p className='kasa-text-photo'>Chez vous, partout et ailleurs</p>
                </div>
                <div className='kasa-gallery'>
                {data.map((log, id) => (
                    <Link to={`/Logement/${log.id}`} className='kasa-gallery-logement' key={id}>
                    <img src={log.cover} alt={log.tag} className='kasa-gallery-image-logement'/>
                    <div>
					<p key={id} className='kasa-gallery-titre-logement'>{log.title}</p>
                    </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ShoppingList