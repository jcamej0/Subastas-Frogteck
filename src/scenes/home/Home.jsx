import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../../images/cart.svg";
import { ReactComponent as Tag } from "../../images/tag.svg";
import "./Style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="option">
        <Link to="/buyer/products">
          <div>
            <h2>Subastar</h2>
            <Cart className="image" />
          </div>
        </Link>
      </div>
      <div className="option">
        <Link to="/seller/products">
          <div>
            <h2>Registrar productos</h2>
            <Tag className="image" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
