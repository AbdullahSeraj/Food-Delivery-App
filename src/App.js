import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App" style={{ marginTop: "83px" }}>
      <BrowserRouter>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : null}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
