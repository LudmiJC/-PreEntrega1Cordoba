import { useContext, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { Container } from "react-bootstrap";
import { CartContext } from "../components/contexts/CartContext";
import Swal from "sweetalert2";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const [formError, setFormError] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const { items, clear, removeItem } = useContext(CartContext);

  const handleChangue = (ev) => {
    const { name, value } = ev.target;

    setBuyer((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormError((prev) => ({
      ...prev,
      [name]: value === "",
    }));
  };

  const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0);

  const handledOrder = () => {
    if (Object.values(formError).some(error => error)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "completa todos los campos",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        Swal.fire({
          icon: "success",
          title: "¡Orden completada!",
          text: `Su orden: ${id} ha sido completada!!`,
          confirmButtonText: "Aceptar",
        });
        setBuyer(initialValues);
        clear();
      }
    });
  };

  return (
    <Container className="container" style={{ backgroundColor: "#E5ECF4" }}>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>ELIMINAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clear}>VACIAR 🛒</button>
      <form className="form-container">
        <div>
          <label htmlFor="name">Ingrese su Nombre</label>
          <input
            type="text"
            value={buyer.name}
            name="name"
            id="name"
            onChange={handleChangue}
          />
          {formError.name && <p style={{ color: "#F2F5EA" }}>Ingrese su nombre</p>}
        </div>
        <div>
          <label htmlFor="phone">Ingrese su Celular</label>
          <input
            type="number"
            value={buyer.phone}
            name="phone"
            id="phone"
            onChange={handleChangue}
          />
          {formError.phone && <p style={{ color: "#F2F5EA" }}>Ingrese su número de teléfono</p>}
        </div>
        <div>
          <label htmlFor="email">Ingrese su Email</label>
          <input
            type="email"
            value={buyer.email}
            name="email"
            id="email"
            onChange={handleChangue}
          />
          {formError.email && <p style={{ color: "#F2F5EA" }}>Ingrese su correo electrónico</p>}
        </div>
        <button type="button" onClick={handledOrder}>COMPRAR</button>
      </form>
    </Container>
  );
};