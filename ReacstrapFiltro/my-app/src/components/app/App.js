import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Container,
    Jumbotron,
    Badge
  } from 'reactstrap';

class App extends Component {
    render() {
      return (
        <div>
        <Container>
            <Jumbotron>
                <h1>Cursos de Programación</h1>
                <p className="lead">Adquiere tu curso de programación desde $10.00</p>
            </Jumbotron>
            <Container fluid>
                <h4>Artículos recientes</h4>
                <div className="rounded bg-secondary p-3 text-white">
                    <h2>Programación en PHP</h2>
                    <h6>Por Juan Urrutía</h6>
                    <h6><Badge color="warning">PHP</Badge><Badge color="primary">WEB</Badge></h6>
                    <p>Contenido del artículo..................
                    Contenido del artículo..................
                    Contenido del artículo..................
                    Contenido del artículo..................
                    Contenido del artículo..................
                    Contenido del artículo..................
                    Contenido del artículo..................
                    Contenido del artículo..................
                    </p>
                    
                </div>
            </Container>    
        </Container>    
        </div>
      );
    }
}

export default App;