import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/action";
import { Carousel, Container } from "react-bootstrap";

import TableProductAdmin from "./TableProductAdmin";
import ProductCard from "./ProductCard";

const ListProduct = ({ products }) => {
  //store
  // const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  //   console.log(products);

  //dispatch getallproducts
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      {user && user.userRoles === "admin" ? (
        <TableProductAdmin product={products} />
      ) : (
        <div>
          <div className="carousels">
            <Carousel variant="dark" fade>
              <Carousel.Item style={{ color: "black" }}>
                <img
                  className="d-block w-100"
                  style={{ height: "100%", opacity: "0.9" }}
                  src="https://baity.tn/c/65-category_default/table-salon.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item style={{ color: "black" }}>
                <img
                  className="d-block w-100"
                  style={{ height: "100%", opacity: "0.9" }}
                  src="https://baity.tn/c/55-category_default/meuble-tv.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <Container>
            <div>
              <h2 className="title-pr">Our products</h2>
              <div className="list-products">
                {products &&
                  React.Children.toArray(
                    products.map((el) => <ProductCard product={el} />)
                  )}
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ListProduct;
