import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component{
    // constructor(props)
    // {
    //     super(props);
    // }

    render(){
        sessionStorage.setItem('session','Cesáreo Castillo Torres');
        return(<Redirect to='/perfil'/>);
    }
}