import Api from "./Api"

function Logement() {
    const data = Api();
    console.log(data)
    return (
        <div>
            {data.map((log, id) => (
            <img src={log.cover} alt={log.tag} className='kasa-gallery-image-logement' />
            ))}
        </div>
    )

}

export default Logement