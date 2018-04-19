import React, { Component } from 'react';
import TemplateLayout from '../components/templatelayout.js';
import LateralContent from '../components/lateralcontent.js';
import MainContent from '../components/maincontent.js';
import Sidebar from '../../navegacion/sidebar.js';
//import {Redirect, Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import FormPerfil from '../../formularios/components/formperfil.js'


export default class Perfil extends Component{    

    render()
    {
        let session = sessionStorage.getItem('session');
        if(!session)
            return(<Redirect to='/home'/>);
        return(
            <TemplateLayout>                
                <LateralContent>                
                <Sidebar pagina="perfil" />
                </LateralContent>            
                <MainContent>
                    <p>Perfil</p>
                    <FormPerfil/>
                </MainContent>    
            </TemplateLayout>
        );
    }
}