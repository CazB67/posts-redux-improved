import React, {useState} from "react";
import "../../App.css";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.PNG';
import "../../App.css";
import {useSelector, useDispatch} from 'react-redux';
import {settingName} from '../../redux/actions';
import { useHistory } from "react-router-dom";


export default function PostsNav(props) {
    const color = useSelector(state => state.setTheme.color);
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");

    const logout = () => {
        setName("")
        dispatch( settingName(name));
        history.push("signin")
    }

    return (
        <>
        <Navbar expand="lg" className={color}>
            <Navbar.Brand>
            <img
            src={logo}
            alt="Posts Logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  className="justify-content-end">
                <Nav >
                <Nav.Link style={{color:"white"}} onClick={props.onClick}>Settings</Nav.Link>
                <Nav.Link style={{color:"white"}} onClick={logout}>Logout </Nav.Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </> 
  );
}