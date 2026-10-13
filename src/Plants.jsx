const Plants = ({ allPlants, addPlantToCart }) => {
    return (
        <>
            <ul>
                {
                    allPlants.map((individualPlant) => {
                        return (
                            <Plant individualPlant={individualPlant} addPlantToCart={addPlantToCart} />
                        )
                    })
                }
            </ul>
        </>
    )
};

export default Plants;