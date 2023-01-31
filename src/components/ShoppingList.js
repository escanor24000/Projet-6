import '../styles/ShoppingList.css'
import photo from '../assets/img_kasa.png'

function ShoppingList() {
    return (
        <div className='kasa-shoppinglist'>
            <div>
            <img src={photo} alt='vue de de bord de mer' className='kasa-photo' />
            <div className='kasa-box-text-photo'>
            <p className='kasa-text-photo'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='kasa-gallery'>

            </div>
            </div>
        </div>
    )
}
export default ShoppingList