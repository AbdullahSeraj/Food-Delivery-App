import { createContext, useState } from "react";
import { food_list } from "../assets/assets.js"

export const StoreContext = createContext(null)

export default function StoreContextProvider(props) {
    const [cartItems, setCartItems] = useState({})

    function getTotal() {
        let total = 0;

        food_list.map(item => {
            if (cartItems[item._id] > 0) {
                total += item.price * cartItems[item._id]
            }
        })
        return total;
    }


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems({ ...cartItems, [itemId]: 1 })
        } else {
            setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 })
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 })
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotal
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}