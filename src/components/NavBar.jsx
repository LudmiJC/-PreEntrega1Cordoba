import { CartWidget } from "./CartWidget";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <Navbar className="NavBar">
                <Container fluid="sm" >
                    <NavLink to="/" className="titulo_NavBar">Library</NavLink>
                    <Nav>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </>
    );
};
