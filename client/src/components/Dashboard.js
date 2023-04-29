import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logoutUser } from "../redux/action";
import { TbLogout } from "react-icons/tb";
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Dashboard = ({ searching, handleSearch }) => {
  const { user } = useSelector((state) => state.user);

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="header">
      <Navbar id="headerNav" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand href="/" className="ecomerce">
            <FaShopify /> E-commerce
          </Navbar.Brand>{" "}
          <Navbar.Brand href="/" className="ecomerce">
            <i class="fa-solid fa-austral-sign"></i> Products
          </Navbar.Brand>
          <Form className="d-flex" id="search">
            <div id="research">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searching}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <div id="research-icon">
                <FaSearch />
              </div>
            </div>
          </Form>
          <div className="all_nave">
            {user ? (
              <div className="navs">
                <div className="nav-icon">
                  <Nav>
                    <Nav.Link>
                      <FaUserCircle /> {user.fullName}{" "}
                    </Nav.Link>
                  </Nav>
                </div>

                <div className="nav-btn">
                  <Nav>
                    <Nav.Link to="/"
                      id="Button"
                      onClick={() => dispatch(logoutUser())}
                    >
                      {" "}
                      <TbLogout />
                      LogOut{" "}
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            ) : (
              <div className="nave">
                <div className="login">
                  <Nav>
                    <Nav.Link href="/login" id="Button">
                      Login<i class="fa-solid fa-right-to-bracket"></i>
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            )}

            {user && user.userRoles === "admin" ? (
              <Nav>
                <div className="btnCartCount">
                  {/* <div className="count"> 0</div> */}
                  <Nav.Link href="/login">
                    <i className="fas fa-shopping-cart"></i>
                  </Nav.Link>
                </div>
              </Nav>
            ) : (
              <Nav>
                <div className="btnCartCount">
                  <div className="count">{Object.keys(cartItems).length} </div>
                  <Nav.Link href="/cart">
                    <i className="fas fa-shopping-cart"></i>
                  </Nav.Link>
                </div>
              </Nav>
            )}
          </div>
       
        </Container>
      </Navbar>
    </div>
  );
};
export default Dashboard;
