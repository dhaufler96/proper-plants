import Catalog from "./catalog.jsx"
import Cart from "./Cart.jsx"
import PLANTS from "./data.js";
import { useState } from "react";
import Plants from "./Plants.jsx";

export default function App() {
  const [allPlants, setAllPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);
  const addPlantToCart = (plantToBeAdded) => {
    const foundPlant = cart.find((item) => { return plantToBeAdded.id === item.id })
    if(!foundPlant) {
      setCart([...cart, { ...plantToBeAdded, quantity: 1 }])
    } else {
      setCart(
        cart.map((cartPlant) => {
          if(cartPlant.id === plantToBeAdded.id) {
            return { ...cartPlant, quantity: cartPlant.quantity + 1 }
          } else {
            return cartPlant;
          }
        })
      )
    }
  }

  const removePlantFromCart = (plantToBeRemoved) => {
    setCart(
      cart.map((cartPlant) => {
        if(cartPlant.id === plantToBeRemoved.id) {
          return { ...cartPlant, quantity: cartPlant.quantity - 1 }
        } else {
          return cartPlant
        }
      }).filter((cartPlant) => {
        return cartPlant.quantity > 0;
      })
    )
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <h2>Your plant shopping made easy!</h2>
      <Cart cart={cart} removePlantFromCart={removePlantFromCart} addPlantToCart={addPlantToCart}/>
      <Plants allPlants={allPlants} addPlantToCart={addPlantToCart}/>
    </>
  )
}
