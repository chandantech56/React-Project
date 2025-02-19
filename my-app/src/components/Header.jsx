
import React from 'react'
import { Navbar, Nav, Container,NavDropdown,img } from "react-bootstrap";
const header = () => {
  return (
     <header>
        <Navbar expand="lg" className="header-style">
      <Container>
        <Navbar.Brand href="#home">
        <img className="Logo" src="image/logo.png" alt='npu logo' roundedCircle/>
        <h6 className="Logo-text">Nilamber Pitamber University Palamu</h6>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Academy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#/3.1">Admission</NavDropdown.Item>
              <NavDropdown.Item href="#/3.1">Circular & Notification</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Certificate Issued
              </NavDropdown.Item>
             
            </NavDropdown>


            <NavDropdown title="Examination" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
              <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Result
              </NavDropdown.Item>
             </NavDropdown>

             <NavDropdown title="NPU Department" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">B.sc</NavDropdown.Item>
              <NavDropdown.Item href="#">Bcom</NavDropdown.Item>
              <NavDropdown.Item href="#">M.sc</NavDropdown.Item>
             </NavDropdown>


             <NavDropdown title="Staff Login" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
             </NavDropdown>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
  )
}

export default header