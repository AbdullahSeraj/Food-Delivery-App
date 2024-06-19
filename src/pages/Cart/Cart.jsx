import { useContext } from "react"
import "./Cart.scss"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { food_list, cartItems, removeFromCart, getTotal } = useContext(StoreContext);
    const navigate = useNavigate()

    return (
        <div className="cart">
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {food_list.map((item, i) => {
                            if (cartItems[item._id] > 0) {
                                return <tr key={i}>
                                    <td><img src={item.image} alt="" /></td>
                                    <td><p>{item.name}</p></td>
                                    <td><strong className="price">${item.price}</strong></td>
                                    <td><span>{cartItems[item._id]}</span></td>
                                    <td><strong className="price">${item.price * cartItems[item._id]}</strong></td>
                                    <td><i className="fa-solid fa-x" onClick={() => removeFromCart(item._id)}></i></td>
                                </tr>
                            }
                        })}
                    </tbody>
                </table>
            </div>

            <div className="cart-bottom">
                <div className="totals">
                    <h2>Cart Totals</h2>
                    <div className="list">
                        <p>Subtotal</p>
                        <span>${getTotal()}</span>
                    </div>
                    <hr />
                    <div className="list">
                        <p>Delivery</p>
                        <span>${getTotal() === 0 ? '0' : '5'}</span>
                    </div>
                    <hr />
                    <div className="list list-total">
                        <p>Total</p>
                        <span>${getTotal() + (getTotal() === 0 ? 0 : 5)}</span>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>

                <div className="search-cart">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="input">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}