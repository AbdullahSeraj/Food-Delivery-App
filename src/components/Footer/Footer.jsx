import logo from "../../assets/logo.png"
import "./Footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="first">
                    <img src={logo} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, hic! Pariatur libero, laudantium id in ullam eum culpa incidunt est, earum consectetur adipisci labore cum dolore, voluptas porro error fugiat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, hic! Pariatur libero, laudantium id in ullam eum culpa incidunt est, earum consectetur adipisci labore cum dolore, voluptas porro error fugiat.
                    </p>
                    <div className="icons">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="http://www.twitter.com/share?url=http://www.google.com" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>

                <div className="sc">
                    <h2>COMPANY</h2>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Delivery</p>
                    <p>privocy policy</p>
                </div>

                <div className="sc">
                    <h2>GET IN TOUCH</h2>
                    <p><a href="tel:+905013362511">+90 (501) 336 25 11</a></p>
                    <p><a href="mailto: serajs.net@gmail.com">serajs.net@gmail.com</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <a href="https://serajs.com" target="_blank">
                    <p>© 2024 SERAJS, Inc. | Reseved All Right</p>
                </a>
            </div>
        </footer >
    )
}