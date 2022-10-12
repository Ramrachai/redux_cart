import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, Link } from "react-router-dom";
import styles from "./style.module.css";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";


function Menubar() {
  const items = useSelector(state =>state.cart)
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>Redux Store</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto d-flex flex-row">
            <Link className={styles.menubarLinks} to="/">
              {" "}
              Home{" "}
            </Link>
            <Link className={styles.menubarLinks} to="/products">
              {" "}
              Product{" "}
            </Link>
          </Nav>
          <Nav>
            <Link to="/cart">
              <Tooltip title="Cart">
                <Badge badgeContent={items.length} color="secondary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </Tooltip>
            </Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Menubar;
