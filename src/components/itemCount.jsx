import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (stock > count) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(1);
    onAdd(count);
  };

  return (
    <div className="counter">
      <button onClick={handleDecrease}>-</button>
      <input value={count} readOnly />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAdd}>AGREGAR AL CARRITO</button>
    </div>
  );
};