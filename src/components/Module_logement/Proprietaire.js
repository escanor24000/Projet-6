import '../../styles/Module_logement/Proprietaire.css'

const Proprietaire = ({host}) => {
console.log(host)
    return (
        <>
            {host.map((data, index) => (
                <div key={index} className="Proprietaire_conteneur">
                    <p className='Proprietaire-nom'>{data.host.name}</p>
                    <img src={data.host.picture} alt='yolo' className='Proprietaire-photo'/> 
                </div>
            ))}
        </>
    )

}

export default Proprietaire