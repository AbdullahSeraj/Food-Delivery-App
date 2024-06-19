import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreContextProvider from "./context/StoreContext.jsx";

document.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    document.querySelector(".navbar").classList.remove("scroll");
  } else {
    document.querySelector(".navbar").classList.add("scroll");
  }
});

// window.scrollBy({
//   top: 100,
//   left: 0,
//   behavior: 'smooth'
// });

// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: 'smooth'
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
);
