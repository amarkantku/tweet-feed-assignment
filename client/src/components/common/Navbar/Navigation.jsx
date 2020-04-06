import React, { Component } from 'react';
import { Container, Navbar, NavDropdown, Nav, NavItem, NavLink, Form, FormControl , Button} from 'react-bootstrap';
import Notification from '../Notification/Notification';
import classNames from 'classnames/bind';
import styles from './Navigation.css';
const cx = classNames.bind(styles);

const Navigation = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="d-flex flex-column p-3 flex-md-row bg-white border-bottom shadow-sm">
        <Navbar.Brand href="/" className="my-0 mr-md-auto">Tweet Feeder</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Notification />
          </Nav>
        </Navbar.Collapse>    
      </Navbar>
    </header>
  );
}

export default Navigation;