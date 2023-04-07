import '../../styles/Module_logement/Localisation.css'

const Localisation = ({localise}) => {
    return (
        <>
            {localise.map((data,index) => (
                <div className='locali_box' key={index}>
                    <p className='locali-titre'>{data.title}</p>
                    <p className='locali-adresse'>{data.location}</p>
                </div>
            ))}
        </>
    )

}

export default Localisation