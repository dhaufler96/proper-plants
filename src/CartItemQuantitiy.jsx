const CartItemQuantity = ({ cartPlant, quantity, removePlantFromCart, addPlantToCart }) => {
    return (
        <>
            <button onClick={() => { removePlantFromCart(cartPlant) }}>-</button>
            <p>{cartPlant.quantity}</p>
            <button onClick={() => { addPlantToCart(cartPlant) }}>+</button>
        </>
    )
}

export default CartItemQuantity;