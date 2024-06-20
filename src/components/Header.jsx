import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../Assets/nykaa-1.svg';
import { MyContext } from './AppProvider';

const Header = () => {
  
  const { searchTerm , setSearchTerm } = useContext(MyContext)
// console.log(searchTerm);
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={img} alt="" className='w-36'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto " >
            <Nav.Link href="#home">Categories</Nav.Link>
            <Nav.Link href="#link">Brand</Nav.Link>
            <Nav.Link href="#link">Luxuary</Nav.Link>
            <Nav.Link href="#link">Nyka Fashion</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              // onKeyUp={()=>searchHandler()}
            />
          </Col>
          <Col xs="auto">
            <Button className='bg-pink-500 border-transparent'  type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      {/* <button><i class="bi bi-bag"></i></button> */}
      </Container>
    </Navbar>
    </>
  );
         
}

export default Header