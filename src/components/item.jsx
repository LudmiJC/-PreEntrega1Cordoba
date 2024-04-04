import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <Card className="self-start w-80 mt-2">
      <CardHeader shadow={false} floated={false} className="h-80">
        <img
          src={`/src/assets/products/${item.pictureUrl}`}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold">
            {item.title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            ${item.price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-90 mb-2"
        >
          {`${item.category} | ${item.brand}`}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {item.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Agregar al Carrito
        </Button>
        <Link to={`/item/${item.id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-deep-orange-300 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 mt-2"
          >
            + Info
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
