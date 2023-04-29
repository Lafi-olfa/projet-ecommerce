import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getAllProducts } from "../redux/action";
const UpdateProduct = ({ product }) => {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(product);
  //inputs for state
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [promo, setPromo] = useState(product.promo);
  const [image, setImage] = useState(product.image);
  const [description, setDescription] = useState(product.description);
  const [count, setCount] = useState(product.countInStock);
  const [rating, setRating] = useState(product.rating);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedProd = {
      _id: product._id,
      title,
      price,
      category,
      rating,
      promo,
      image,
      description,
      count,
    };
    dispatch(editProduct(editedProd));
    dispatch(getAllProducts());
  };
  return (
    <div>
      <>
        <Button id="Button" style={{height:"40%",width:"40%",margin:"10px"}} onClick={handleShow}>
          Update
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {/*  */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  className="label"
                  style={{
                    width: "100px",
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  Product name:{" "}
                </Form.Label>
                <Form.Control
                  style={{ width: "200px", marginLeft: "100px" }}
                  type="text"
                  placeholder="product name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  style={{
                    width: "100px",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  className="label"
                >
                  Price:
                </Form.Label>

                <Form.Control
                  style={{ width: "200px", marginLeft: "100px" }}
                  type="text"
                  placeholder="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  style={{
                    width: "100px",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  className="label"
                >
                  Category:
                </Form.Label>

                <Form.Control
                  style={{ width: "200px", marginLeft: "100px" }}
                  type="text"
                  placeholder="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  className="label"
                  style={{
                    width: "100px",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Promotion:
                </Form.Label>

                <Form.Control
                  style={{ width: "200px", marginLeft: "100px" }}
                  type="text"
                  placeholder="Quantity"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  className="label"
                  style={{
                    width: "200px",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Description:
                </Form.Label>

                <Form.Control
                  style={{ width: "200px", marginLeft: "100px" }}
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  style={{
                    width: "100px",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  className="label"
                >
                  Image:
                </Form.Label>

                <Form.Control
                  style={{ width: "200px", marginLeft: "100px" }}
                  type="text"
                  placeholder="Description"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label
                  style={{
                    width: "200px",
                    color: "black",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  className="label"
                >
                  CountInStock:
                </Form.Label>

                <Form.Control
                  style={{ width: "200px", marginLeft: "100px" }}
                  type="text"
                  placeholder="Description"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </Form.Group>
              {user && user.userRoles === "admin" ? (
                <div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      className="label"
                      style={{
                        width: "100px",
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      Rating:
                    </Form.Label>

                    <Form.Control
                      style={{ width: "200px", marginLeft: "100px" }}
                      type="text"
                      placeholder="Description"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </Form.Group>{" "}
                </div>
              ) : (
                <div> </div>
              )}
              <Button type="submit" onClick={handleClose} id="Button">
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default UpdateProduct;
