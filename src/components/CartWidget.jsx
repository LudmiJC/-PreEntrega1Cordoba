import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Badge, IconButton } from "@material-tailwind/react";

export const CartWidget = () => {
  return (
    <Badge content="0" withBorder className="font-bold">
      <IconButton size="sm">
        <ShoppingCartIcon className="h-4 w-4" />
      </IconButton>
    </Badge>
  );
};
