import { ItemCount } from "./itemCount";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "./contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => addItem(item, quantity);

  return (
    <Container
      className="mt-4 text-center"
      style={{ backgroundColor: "#E5ECF4" }}
    >
      {item && (
        <>
          <div className="title">{item.title}</div>
          <div className="sub">{item.categoryId}</div>
          <div className="stock">Stock {item.stock}</div>
          <div className="precio">${item.price}</div>
          <img className="img" src={item.imageId} alt={item.title} />
          <ItemCount onAdd={add} stock={item.stock} />
        </>
      )}
    </Container>
  );
};
