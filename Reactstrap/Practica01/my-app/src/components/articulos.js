import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css';
import {    
    Container,    
    Row
  } from 'reactstrap';

class Articulos extends Component {
    render() {
        return (
            <div>       
            <Container fluid>
                <h4>Artículos recientes</h4>
                <Row>
                <div className="rounded bg-secondary p-3 text-white">
                    <h2>Programación en PHP con Laravel</h2>            
                    <h6><i className="far fa-calendar-alt"></i>By Cesáreo Castillo Torres, Febraury 2018</h6>
                    <h6>
                        <span className="badge badge-warning">PHP</span>
                        <span className="badge badge-info">Web</span>
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam rerum error praesentium labore consequatur deserunt laudantium dicta inventore voluptates? Nemo neque ab tempore aliquid minima! Adipisci ipsum iure deserunt impedit!
                    </p>       
                    <br/>         
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                    <hr/>
                    <h2>Programación en Asp.net</h2>
                    <h6><i class="far fa-calendar-alt"></i>By Cesáreo Castillo Torres, January 2016</h6>
                    <h6>
                        <span class="badge badge-primary">C#</span>
                        <span class="badge badge-info">Web</span>                
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam rerum error praesentium labore consequatur deserunt laudantium dicta inventore voluptates? Nemo neque ab tempore aliquid minima! Adipisci ipsum iure deserunt impedit!
                    </p>
                    <br/>            
                </div>
                </Row>
                <Row><br/><br/></Row>
            </Container>      
            <footer className="fixed-bottom container-fluid bg-secondary text-center text-white">
                My Blog 2018                
            </footer>  
        </div>
        );
    }
}

export default Articulos;