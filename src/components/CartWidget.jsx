import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../components/contexts/CartContext";

import carrito from "../assets/cart.png";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.quantity,
    0
  );
  if(!total) return null;

  return (
    <Link to="/cart">
      <div id="cart-widget">
        <img src={carrito} alt="Carrito de Compras" height={40} />
        <span>{total}</span>
      </div>
    </Link>
  );
};
