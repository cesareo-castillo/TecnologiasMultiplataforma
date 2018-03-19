import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css';
import {
    Jumbotron
  } from 'reactstrap';

class Encabezado extends Component {
    render() {
        return (
            <div>        
            <Jumbotron fluid>
                <h1>Cursos de Programación</h1>
                <p className="lead">Adquiere tu curso de programación desde $10.00</p>
            </Jumbotron>                        
            </div>
        );
    }
}

export default Encabezado;