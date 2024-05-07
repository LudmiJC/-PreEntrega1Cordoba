import { Item } from "./item";

export const ItemList = ({ items }) => {
  return (
    <div className="List">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
