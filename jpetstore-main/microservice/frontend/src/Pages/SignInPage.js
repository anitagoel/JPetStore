import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

import { SIGNIN, signIn, signUp } from "../Store/Actions/auth.actions";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    authenticated,
    error = { status: true },
    validating,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (authenticated === true) {
      navigate("/");
    }
  }, [authenticated]);

  // useEffect(() => {
  //   if (error !== null && error.status === false) {
  //     alert("Username and password mismatch.");
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    dispatch(signIn.request(credentials));
  };

  return (
    <div className="app">
      <Col md={6} className="mx-auto mt-4">
        <Row xs={1} md={12} className="g-2 mt-2 mb-2">
          <h1 className="text-center">Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                // id="username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                // id="password"
              />
            </Form.Group>

            <Button
              className="full-btn color-primary no-border mx-auto"
              variant="primary"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
          <p className="text-dark mx-auto">
            Need a new username and password?{" "}
            <Link className="text-dark" to="/register">
              Register now!
            </Link>
          </p>
        </Row>
      </Col>
    </div>
  );
};

export default SignInPage;
