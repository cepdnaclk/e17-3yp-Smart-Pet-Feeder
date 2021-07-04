// import { useContext } from 'react';
import { Navbar, Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "../Styles.module.css";

// import AuthContext from '../Store/auth-context';
import {homepage_path} from "../util/homepage_path";
const MainNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Col md={{ span: 1, offset: 1 }}>
        <NavLink
          exact
          to={homepage_path + "/"}
          className={styles["nav-link"]}
          activeClassName={styles["active-nav-link"]}
        >
          Homepage
        </NavLink>
      </Col>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Row>
            <Col md={{ span: 1 }}>
              <NavLink
                to={homepage_path + "/about"}
                className={styles["nav-link"]}
                activeClassName={styles["active-nav-link"]}
              >
                About
              </NavLink>
            </Col>

            <Col md={{ span: 2, offset: 7 }}>
              <NavLink
                to={homepage_path + "/login"}
                className={styles["nav-link"]}
                activeClassName={styles["active-nav-link"]}
              >
                Login
              </NavLink>
            </Col>

            <Col md={{ span: 2 }}>
              <NavLink
                to={homepage_path + "/signup"}
                className={styles["nav-link"]}
                activeClassName={styles["active-nav-link"]}
              >
                Signup
              </NavLink>
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
