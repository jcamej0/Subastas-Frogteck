import React from "react";
import { Card, Button } from "react-bootstrap";
import useGlobalState from "../../globalState";
import "./Style.css";

const ProductList = ({ onClickProduct = null, children }) => {
  const [globalState] = useGlobalState();
  const {
    products: { products }
  } = globalState;
  const handleOnClickProduct = productId => {
    if (onClickProduct === null) {
      alert("No puedes participar en subastas como vendedor.");
    } else {
      onClickProduct(productId);
    }
  };

  return (
    <div className="container" id="products-container">
      {products.map((product, index) => {
        return (
          <Card
            key={index}
            onClick={() => handleOnClickProduct(product.id)}
            className="product"
          >
            <Card.Img
              variant="top"
              src="https://frogtek.org/assets/img/logo.svg"
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Ingresa a la subasta por un increible {product.name}
              </Card.Text>
              <Button variant="primary">Subastar</Button>
            </Card.Body>
          </Card>
        );
      })}
      {children}
    </div>
  );
};

export default ProductList;
