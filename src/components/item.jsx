import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <Card>
      <Card.Img className="self-start w-80 mt-2" src={product.imageId} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.categoryId}</Card.Text>
        <Link to={`/item/${product.id}`} className="text-decoration-none">
          <Button
            variant="primary"
            className="mt-3"
          >
            Agregar al Carrito
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};