import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./components/contexts/CartContext.jsx";
import "./index.css";
import App from "./App.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyAdBguNsJjDV8vYUD5Beh8mZMZVJeBCmZE",
  authDomain: "projectfinal-ludmilacordoba.firebaseapp.com",
  projectId: "projectfinal-ludmilacordoba",
  storageBucket: "projectfinal-ludmilacordoba.appspot.com",
  messagingSenderId: "205295969903",
  appId: "1:205295969903:web:321cf81bf6be4a305f0f9a"
};

initializeApp(firebaseConfig);


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
        <App />
    </CartProvider>
);