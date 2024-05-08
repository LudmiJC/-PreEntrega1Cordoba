import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";


import Container from "react-bootstrap/Container";
import { ItemList } from "./itemList";

export const ItemListConteiner = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!id) refCollection = collection(db, "items");
    else {
      refCollection = query(
        collection(db, "items"),
        where("categoryId", "==", id)
      );
    }

    setLoading(true); 

    getDocs(refCollection)
      .then((snapshot) => {
        const fetchedItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(fetchedItems);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        LIBROS MÁS DESTACADOS
      </h1>
      {loading ? (
        <p>Cargando libros...</p>
      ) : (
        <ItemList items={items} />
      )}
    </Container>
  );
};