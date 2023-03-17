
const Localisation = ({localise}) => {
    return (
        <>
            {localise.map((data) => (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.location}</p>
                </div>
            ))}
        </>
    )

}

export default Localisation