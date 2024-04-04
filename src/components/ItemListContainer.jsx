import { useEffect, useState } from "react";
import { ItemList } from "./itemList";
import data from "./data/products.json";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (id) {
        const filteredData = data.filter(
          (data) => data.category.toLowerCase() === id
        );
        setItems(filteredData);
      } else {
        setItems(data);
      }
    });
  }, [id]);

  return (
    <div className="bg-gray-600 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 place-items-center mx-auto max-w-7xl p-8 sm:px-6 lg:px-8">
      <ItemList items={items} />
    </div>
  );
};
