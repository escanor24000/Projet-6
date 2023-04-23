import '../../styles/Module_logement/Proprietaire.css'

const Proprietaire = ({host}) => {
    return (
        <>
            {host.map((data, index) => (
                <div key={index} className="Proprietaire_conteneur">
                    <p className='Proprietaire-nom'>{data.host.name}</p>
                    <img src={data.host.picture} alt='photo du propriétaire' className='Proprietaire-photo'/> 
                </div>
            ))}
        </>
    )

}

export default Proprietaire