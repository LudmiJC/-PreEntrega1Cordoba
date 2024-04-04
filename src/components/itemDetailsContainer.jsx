import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data/products.json";
import { Typography } from "@material-tailwind/react";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filteredData = data.find((data) => data.id === Number(id));
      setItem(filteredData);
    });
  }, [id]);

  if (!item) return null;

  const SingleItemCard = () => {
    return (
      <div className="flex flex-col min-w-[390px] wsm:flex-col md:flex-row p-8 bg-gray-300">
        <img
          className="h-96 w-96 rounded-lg object-cover object-center border-gray-700 border-2"
          src={`/src/assets/products/${item.pictureUrl}`}
          alt={item.title}
        />
        <div className="flex flex-col ml-5">
          <Typography variant="h2" className="">
            {item.title}
          </Typography>
          <hr className="my-5" />
          <Typography variant="h5">Categoría: {item.category}</Typography>
          <Typography variant="h5">Marca: {item.brand}</Typography>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-600 px-6 pt-10 pb-6 max-w-7xl mx-auto shadow-md">
      <SingleItemCard />
    </div>
  );
};
