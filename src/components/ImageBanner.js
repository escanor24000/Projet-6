import "../styles/ImageBanner.css"

function ImageBanner({image, expli}){
    return(
        <img src={image} alt={expli} className='kasa-photo'/>
    )
}

export default ImageBanner