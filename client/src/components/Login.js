import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginUser } from "../redux/action";
const Login = () => {
  const { loading } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <div className="container-login">
      {loading ? (
        <div className="load">
          <div className="one"> </div>
          <div className="two"> </div>
          <div className="three"> </div>
        </div>
      ) : localStorage.getItem("token") ? (
        <Navigate to="/profile" />
      ) : (
        <div className="login_Form ">
          <Form onSubmit={handleSubmit}>
            <h3 id="titlelogin">login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button id="Button" type="submit">
              Login
            </Button>
            <hr />
            <Form.Text>
              Don't have a Account{" "}
              <Link to="/register">
                <span className="create-now"> Create Now</span>{" "}
              </Link>
            </Form.Text>
          </Form>
        </div>
      )}
    </div>
  );
};
export default Login;
