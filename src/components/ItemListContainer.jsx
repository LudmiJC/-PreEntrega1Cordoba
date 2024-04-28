import { useEffect, useState } from "react";
import { ItemList } from "./itemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState();
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection)
      .then((snapshot) => {
        const fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [id]);

  return (
    <div className="bg-gray-600 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 place-items-center mx-auto max-w-7xl p-8 sm:px-6 lg:px-8">
      <ItemList products={products} />
    </div>
  );
};
