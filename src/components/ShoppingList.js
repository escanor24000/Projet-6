import '../styles/ShoppingList.css'
import photo from '../assets/img_home.png'
import Api from './Api'
import { Link } from 'react-router-dom'
import ImageBanner from './ImageBanner'

function ShoppingList() {
    const data = Api();
    return (
        <>
            <div className='contener-img-texte'>
                <ImageBanner image={photo} expli='vue de de bord de mer'/>
                <p className='kasa-text-photo'>Chez vous, partout et ailleurs</p>
            </div>
            <section className='kasa-gallery'>
                {data.map((log, id) => {
                    return (
                        <Link to={`/Logement/${log.id}`} className={((id > 0 && (id + 1) % 3 === 0) ? 'kasa-gallery-container-3' : 'kasa-gallery-container-1-2')} key={id}>
                            <img src={log.cover} alt='photo des appartements' className='kasa-gallery-image-logement' />
                            <p key={id} className='kasa-gallery-titre-logement'>{log.title}</p>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}
export default ShoppingList