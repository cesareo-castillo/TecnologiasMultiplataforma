import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,   
    Button,    
    Form,
    Input
  } from 'reactstrap';

class Barra extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (      
      <div id="header-contenedor">
      <Navbar light expand="md">
        <NavbarBrand href="#">Programación XYZ</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
        <Nav navbar>         
          <NavItem>
            <NavLink className='activa' href="#">Home</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  href="#">Cursos</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
              <NavLink  href="#">Contacto</NavLink>
          </NavItem>                        
          </Nav>
          <Form className="form-inline mt-2 mt-md-0 pull-right">
          <Input type="text" className="form-control mr-sm-2" placeholder="Buscar"/>
          <Button className="btn btn-programacionxyz my-2 my-sm-0" type="submit">
          <span>Buscar</span>
          </Button>
          </Form>
          </Collapse>
        </Navbar>
        </div>
    );
  }
}

export default Barra;