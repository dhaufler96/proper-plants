const CartItem = ({ cartPlant }) => {
    const { name, image, quantity } = cartPlant;

    return (
        <>
            <h2>Cart</h2>

            {
                cart.length === 0 ?
                    <p>Select an item to add to cart.</p> :
                    <>
                        cart.map((cartPlant) => {
                            return <CartItem cartPlant={cartPlant}/>
                        })
                    </>
            }
        </>
    )
}

export default Cart;