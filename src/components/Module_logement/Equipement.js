const Equipement = ({equip}) => {
    return (
        <>
            {equip.map((data) => (
                <div>
                    <div>
                        <p>Équipement</p>
                    </div>
                    <div>
                    <p>{data.equipments}</p>
                    </div>
                </div>
            ))}
        </>
    )

}

export default Equipement