import React from "react";
import style from './Header.module.css';
import {Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


let Header = (props) => {
    return (<Navbar collapseOnSelect expand="false" bg="dark" variant="dark">
        <Navbar.Brand href="/">
            Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <div className={style.info_container}>
                    <img className={style.img}
                         src={'https://hhcdn.ru/photo/649222477.jpeg?t=1650625339&h=nEWRemWbEzeQJdlTZx73_A'}/>
                    <h6 className={style.text}>Петров Олег Игоревич</h6>
                    <h6 className={style.text}>oleg.petrov.job@gmail.com</h6>
                </div>
                <Nav.Link href="/gallery">Галерея</Nav.Link>
                <Nav.Link href="/about-me">Обо мне</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
}

export default Header;
