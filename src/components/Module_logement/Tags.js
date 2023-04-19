import '../../styles/Module_logement/Tags.css'

const tags = ({ motcle }) => {
    return (
        <>
            {motcle.map((data, index) => {
                return (
                    <div key={index} className="tags_conteneur">
                        {data.tags.map(tags =>
                            <p className='tags-texte'>{tags}</p>
                        )}
                    </div>
                )
            })}
        </>
    )

}

export default tags