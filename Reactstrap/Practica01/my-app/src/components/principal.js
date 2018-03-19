import React, { Component } from 'react';
import Barra from './barra.js';
import Encabezado from './encabezado.js';
import Articulos from './articulos.js';

class Principal extends Component {
    render() {
        return (
            <div>
            <Barra />
            <Encabezado />
            <Articulos />
            </div>
        );
    }
}

export default Principal;