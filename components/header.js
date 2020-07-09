import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <div className="Header">
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Stock-app</Navbar.Brand>
</Navbar>
    </div>
  );
}

export default Header;
