
const tags = ({motcle}) => {
    return (
        <>
            {motcle.tags.map((data, id) => {
                <div key={id}>
                     <div>
                        <p>{data}</p>
                     </div>
                </div>
            })}
        </>
    )

}

export default tags