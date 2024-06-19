import "./Login.scss"
import { useState } from "react";

export default function Login({ setShowLogin }) {
    const [currState, setCurrState] = useState('Login');

    function handleSubmit(event) {
        event.preventDefault();
        alert("Successfully");
        setShowLogin(false)
    }

    return (
        <div className="login">
            <div className="box">
                <div className="title">
                    <h2>{currState}</h2>
                    <div onClick={() => setShowLogin(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                </div>

                <form action="" onSubmit={handleSubmit}>
                    {currState === "Sign Up" ?
                        <input type="text" placeholder="Your Name" required />
                        : <></>
                    }
                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                    <div className="checkbox">
                        <input type="checkbox" id="checkbox" required />
                        <label htmlFor="checkbox">By continuing, I agree to the terms of use & privact policy.</label>
                    </div>
                </form>

                <div className="to-signup">
                    {
                        currState === 'Login' ?
                            <p>Create a new account ? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                            :
                            <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                    }
                </div>
            </div>
        </div>
    )
}