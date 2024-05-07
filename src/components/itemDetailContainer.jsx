import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDoc, doc, } from "firebase/firestore";
import { ItemDetail } from "./itemDetail";

export const ItemDetailConteiner = () => {
  const [item, setItem] = useState(null);
	
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!item) return null;

  return (
    <Container className="ItemDetailContainer">
      <ItemDetail item={item} />
    </Container>
  );
};
