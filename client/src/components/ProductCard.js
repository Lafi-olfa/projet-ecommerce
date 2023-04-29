import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import UpdateProduct from "./UpdateProduct";
import { addToCart, removeProduct } from "../redux/action";
import AddProduct from "./AddProduct";

const ProductCard = ({ product }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="product-card-container">
      <Card className="card-prod">
        <Card.Body className="container">
          <img src={product.image} className="name" alt="erreur" />
          <Card.Title className="name">{product.title}</Card.Title>
          <Card.Text>
            <span className="rate">
              {product.rating == "1" ? "★" : null}
              {product.rating == "2" ? "★★" : null}
              {product.rating == "3" ? "★★★" : null}
              {product.rating == "4" ? "★★★★" : null}
              {product.rating == "5" ? "★★★★★" : null}
            </span>
          </Card.Text>

          <Card.Text className="price">{product.promo} dt </Card.Text>
          <div className="btns-prod-card">
            {user && user.userRoles === "admin" ? <AddProduct /> : null}

            {user && user.userRoles === "admin" ? (
              <UpdateProduct product={product} />
            ) : 
            <Link to={`/detailProduct/${product._id}`}>
            {" "}
            <Button id="button" style={{backgroundColor:"#bc2041",border:"none"}}>
              see more
            
            </Button>{" "}
          </Link>
            }
            {user && user.userRoles === "admin" ? (
              <Button
                id="Button"
                style={{ height: "40%", width: "40%", margin: "10px" }}
                onClick={() => dispatch(removeProduct(product._id))}
              >
                {" "}
                delete
                {/* <TiDeleteOutline /> */}
              </Button>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
