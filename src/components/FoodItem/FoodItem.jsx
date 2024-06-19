import { useContext } from "react"
import star from "../../assets/rating_starts.png"
import "./FoodItem.scss"
import { StoreContext } from "../../context/StoreContext";


export default function FoodItem({ item }) {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="item">
            <div className="item-img">
                <img src={item.image} alt="" />
                {!cartItems[item._id] ?
                    <i className="fa-solid fa-plus plus" onClick={() => addToCart(item._id)}></i>
                    : <div className="control">
                        <i className="fa-solid fa-plus plus-2" onClick={() => addToCart(item._id)}></i>
                        {cartItems[item._id]}
                        <i className="fa-solid fa-minus minus" onClick={() => removeFromCart(item._id)}></i>
                    </div>
                }
            </div>
            <div className="text">
                <div className="title-stars">
                    <h3>{item.name}</h3>
                    <img src={star} alt="" />
                </div>
                <p>{item.description}</p>
                <strong>${item.price}</strong>
            </div>
        </div>
    )
}