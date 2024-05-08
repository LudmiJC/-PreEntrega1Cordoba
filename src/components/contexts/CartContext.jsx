import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const addItem = (item, quantity) => {
    const exists = items.some((i) => i.id === item.id);

    if (exists) {
      const updateItems = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + quantity,
          };
        } else {
          return i;
        }
      });
      setItems(updateItems);
    } else {
      setItems((prev) => {
        return [...prev, { ...item, quantity }];
      });
    }
  };

  const removeItem = (id) => {
    const filterItems = items.filter((item) => item.id !== id);
    setItems(filterItems);
  };
  const cartContextValue = useMemo(() => {
    return {
      items,
      addItem,
      clear,
      removeItem,
    };
  }, [items, addItem, clear, removeItem]); 

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
