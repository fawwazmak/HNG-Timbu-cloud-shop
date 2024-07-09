import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Rbutton from "../Rbutton";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="px-lg-5 px-3">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-0" />
        <Navbar.Brand as={Link} to="/" className="order-1 mx-auto mx-lg-0 logo fs-4"
          style={{ fontFamily: "kotta one" }}
        >
          Elegant Store
        </Navbar.Brand>
        <Nav className="order-2 ms-auto d-lg-none">
          <Nav.Link as={Link} to="/cart">
            <FaShoppingCart size={24} />
          </Nav.Link>
        </Nav>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-lg-1 w-100 text-dark"
        >
          <Nav className="mx-auto">
            <Nav.Link as={Link} className="poppins-medium" to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} className="poppins-medium" to="/category">
              CATEGORY
            </Nav.Link>
            <Nav.Link as={Link} className="poppins-medium" to="/products">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={Link} className="poppins-medium" to="/cart">
              MY CART
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-none d-lg-flex">
            <Rbutton btnText="Login" btnColor="primary" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
