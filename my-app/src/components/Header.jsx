
import React from 'react';
import { Navbar, Nav, Container,NavDropdown ,img} from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
     <header>
        <Navbar expand="lg" className="header-style">
      <Container>

        
     
          <Navbar.Brand href='/'>
          <img className="Logo" src="image/logo.png" alt='npu logo' />
          <h6 className="Logo-text">Nilamber Pitamber University Palamu</h6>
          </Navbar.Brand>
     
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

          {/* <LinkContainer to='/'> */}
               <Nav.Link href='/'>Home</Nav.Link>
          {/* </LinkContainer> */}

            {/* <LinkContainer to='/about'> */}
               <Nav.Link href="/about">About Us</Nav.Link>
            {/* </LinkContainer> */}
            
            <NavDropdown title="Academy" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admission">Admission</NavDropdown.Item>
              <NavDropdown.Item href="/Circular">Circular & Notification</NavDropdown.Item>
              <NavDropdown.Item href="/certifucate">
                Certificate Issued
              </NavDropdown.Item>
             
            </NavDropdown>


            <NavDropdown title="Examination" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
              <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
              <NavDropdown.Item href="/result/loginPage">
                Result
              </NavDropdown.Item>
             </NavDropdown>

             <NavDropdown title="NPU Department" id="basic-nav-dropdown">
              <NavDropdown.Item href="/b.sc">B.sc</NavDropdown.Item>
              <NavDropdown.Item href="/bcom">Bcom</NavDropdown.Item>
              <NavDropdown.Item href="#">M.sc</NavDropdown.Item>
              <NavDropdown.Item href="#">Law</NavDropdown.Item>
              <NavDropdown.Item href="#">B.ed</NavDropdown.Item>
              <NavDropdown.Item href="/mbbs">MBBS</NavDropdown.Item>
              <NavDropdown.Item href="#">Nursing</NavDropdown.Item>
              <NavDropdown.Item href="#">Dentist</NavDropdown.Item>
             </NavDropdown>


             <NavDropdown title="Staff Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login as Admin</NavDropdown.Item>
             </NavDropdown>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
  );
}

export default Header