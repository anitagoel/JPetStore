import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductBySearchKeyword } from "../Store/Actions/search.actions";
import { signOut } from "../Store/Actions/auth.actions";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  ListGroup,
  Row,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import imageTop from "../Assets/images/logo-topbar.gif";

const Header = () => {
  const [items, setItems] = useState([
    "fish",
    "dogs",
    "reptiles",
    "cats",
    "birds",
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    cred: { username },
    authenticated,
  } = useSelector((state) => state.auth);

  const signOutHandler = () => {
    dispatch(signOut.request());
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const keyword = document.getElementById("searchField").value;
    dispatch(getProductBySearchKeyword.request(keyword));
    navigate(`/search/${keyword}`);
  };

  return (
    <div className="bg-white header">
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={imageTop}
                width="200"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/cart">Cart</Link>

              {authenticated === true && username !== undefined ? (
                <>
                  <p
                    className="text-light pt-2 p-2 pb-0"
                    onClick={signOutHandler}
                  >
                    Sign Out
                  </p>
                  <Link to="/account">My Account</Link>
                  {/* <Link to="/order/checkout">checkout</Link>
                  <Link to="/order/confirmation">Confirmation</Link>
                  <Link to="/order/summary">Summary</Link> */}
                </>
              ) : (
                <>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/register">Sign Up</Link>
                </>
              )}
              <Link to="/help">Help</Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="searchField"
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ListGroup
        className="col-md-4 mx-auto text-center border-none"
        horizontal
      >
        {items.map((item, idx) => {
          return (
            <ListGroup.Item className="border-none" key={idx}>
              <Link to={"/catalogue/" + item} className="txt-black p-0">
                {item}
              </Link>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Header;
