import React, { Component } from 'react';
import TemplateLayout from '../components/templatelayout.js';
import LateralContent from '../components/lateralcontent.js';
import MainContent from '../components/maincontent.js';
import Populares from '../../articles/components/populares.js';
import Sidebar from '../../navegacion/sidebar.js';
import SERVICE from '../../constantes.js';

import {        
    Button,    
    Input,
    FormGroup
  } from 'reactstrap';

export default class Home extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            data:{
            articulos:[]            
            },
            filtro:''   
        };
        // this.state = {
        //     filtro: '',
        //     articulos:[]            
        // };               
    }
    
    componentDidMount()
    {   
        // fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares').then(
        //     result=>{
        //         return result.json();
        //     }).then((json)=>{
        //         this.setState({data:json});
        //     });        
    }   

    componentWillMount(){        
        //fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares').then(
        fetch(SERVICE.CONTROLLER_SITIO_POPULARES).then(
            result=>{
                return result.json();
            }).then((json)=>{
                this.setState({data:json});
                // for (var key in json) {
                // this.setState({articulos:json[key]});
                // }
            });
    }

    onChangeFiltro(e){              
        this.setState({
            filtro: e.target.value
        });          
    }
   
    FiltroClick(e){
        var filtro='';        
        var articulos=[];
        if(this.state.filtro)
            filtro=this.state.filtro;
        fetch(SERVICE.CONTROLLER_SITIO_POPULARES).then(
            result=>{                
                return result.json();
            }).then((json)=>{                              
                json['articulos'].forEach(function(articulo){                        
                    if(articulo.nombre.indexOf(filtro)!==-1 || 
                        articulo.descripcion.indexOf(filtro)!==-1)
                        articulos.push(articulo);
                });                
            var filtrados = {articulos};                
            this.setState({data:filtrados});                
        });
    }
    render(){        
        return(
            <TemplateLayout>
                {/*Comentarios: <h2>Hello World!</h2>*/}
                <LateralContent>
                {/*
                <h1>Programming Course</h1>
                <p className="lead">Get your programming course since $10.00</p>
                */}
                <Sidebar pagina="home" />
                </LateralContent>            
                <MainContent>
                    {/*<Populares articulos={this.props.datos.articulos}>*/}
                    <div>        
                    <FormGroup className="d-flex justify-content-end mt-2">
                    <Input type="text" onChange={this.onChangeFiltro.bind(this)} name="filtro" id="filtro" placeholder="filtro" value={this.state.filtro} />
                    <Button color="primary" onClick={this.FiltroClick.bind(this)}>Buscar</Button>
                    </FormGroup>
                    </div> 
                    {/*<Populares articulos={this.state.articulos}>*/}
                    <Populares articulos={this.state.data.articulos}>
                    </Populares>    
                </MainContent>    
            </TemplateLayout>
        );
    }
}