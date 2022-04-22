import React from "react";
import {Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


let NavBar = (props) => {
    return (<Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => props.onPageChanged(0)}>Категория №1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => props.onPageChanged(1)}>Категория №2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-3" onClick={() => props.onPageChanged(2)}>Категория №3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-4" onClick={() => props.onPageChanged(3)}>Категория №4</Nav.Link>
        </Nav.Item>
    </Nav>)


}

export default NavBar;
