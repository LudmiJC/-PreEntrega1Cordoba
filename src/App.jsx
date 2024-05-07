import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListConteiner } from "./components/ItemListContainer";
import { ItemDetailConteiner } from "./components/itemDetailContainer";
import { NavBar } from "./components/NavBar";
import { CartProvider } from "./components/contexts/CartContext";
import { Cart } from "./components/Cart";
import "sweetalert2/dist/sweetalert2.min.css";

function NotFound() {
  return 
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:id" element={<ItemListConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;