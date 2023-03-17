
const propriétaire = ({host}) => {
    return (
        <>
            {host.map((data, id) => {
                <div>
                    <p key={id}>{data.name}</p>
                    <img key={id} src={data.picture} alt='yolo' /> 
                </div>
            })}
        </>
    )

}

export default propriétaire