const Description = ({descrip}) => {
    return (
        <>
            {descrip.map((data) => (
                <div>
                    <div>
                        <p>Description</p>
                    </div>
                    <div>
                    <p>{data.description}</p>
                    </div>
                </div>
            ))}
        </>
    )

}

export default Description