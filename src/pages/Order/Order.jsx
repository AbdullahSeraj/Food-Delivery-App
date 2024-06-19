import { useContext } from "react"
import "./Order.scss"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

export default function Order() {
    const { getTotal, setCartItems } = useContext(StoreContext)
    const navigate = useNavigate()

    function handleChlick() {
        setCartItems({})
        navigate('/')
    }

    return (
        <div className="order">
            <div className="left-order">
                <h1>Delivery Information</h1>
                <form action="">
                    <div className="five">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </div>

                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Street" />

                    <div className="five">
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="State" />
                    </div>

                    <div className="five">
                        <input type="text" placeholder="Zip code" />
                        <input type="text" placeholder="Country" />
                    </div>

                    <input type="text" placeholder="Phone" />
                </form>
            </div>

            <div className="right-order">
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
                    <button onClick={() => handleChlick()}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}