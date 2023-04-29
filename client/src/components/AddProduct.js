import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { addProduct } from "../redux/action";
import { RiAddCircleLine } from "react-icons/ri";

function AddProduct() {
  //state
  // const { product } = useSelector((state) => state.product);

  //title
  const [title, setTitle] = useState("");
  //description
  const [description, setDescription] = useState("");

  //price
  const [price, setPrice] = useState("");
  //category
  const [category, setCategory] = useState("");
  //image
  const [image, setImage] = useState(null);
  //Promotion
  const [promo, setPromo] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { title, description, price, category, image, promo };
    dispatch(addProduct(newProduct));
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");

    setPromo("");
    setImage("");
    handleClose();
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Button
          id="Button"
          style={{ height: "40%", margin: "10px", width: "40%" }}
          onClick={handleShow}
        >
          Add Product{" "}
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit} id="form_adding_product">
            <h2 className="adding-product">Adding product </h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  width: "220px",
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
                placeholder="Product name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  width: "200px",
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
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

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  width: "200px",
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Category
              </Form.Label>

              <Form.Control
                style={{ width: "200px", marginLeft: "100px" }}
                type="text"
                placeholder="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  width: "200px",
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
                placeholder="promotion"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
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
            </Form.Group>

            {/* uploadfile */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label
                style={{
                  width: "200px",
                  color: "black",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Image:
              </Form.Label>
              <Form.Control
                style={{ width: "400px", marginLeft: "50px" }}
                type="input"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <div className="btn-add" style={{ marginLeft: "50px" }}>
              <div id="cancel" style={{ marginLeft: "50px" }}>
                <Button id="Button" onClick={() => handleClose()}>
                  <i class="fa-solid fa-ban"></i> Cancel{" "}
                </Button>
              </div>
              <div id="add" style={{ marginLeft: "50px" }}>
                <button id="Button" type="submit">
                  <i class="fa-solid fa-plus"></i> Add
                </button>
              </div>
            </div>
          </Form>
          <Modal.Footer>
            <Button id="Button">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default AddProduct;
