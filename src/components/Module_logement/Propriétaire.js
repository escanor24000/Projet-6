
const propriétaire = ({host}) => {
    return (
        <>
            {host.map((data, index) => (
                <div key={index}>
                    <p>{data.name}</p>
                    <img src={data.picture[1]} alt='yolo' /> 
                </div>
            ))}
        </>
    )

}

export default propriétaire