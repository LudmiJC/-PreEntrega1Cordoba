import { Item } from "./item";

export const ItemList = ({ products }) => {
  const productList = products || [];
  return productList.map((product) => (
  <Item product={product} key={product.id} />
));
};
