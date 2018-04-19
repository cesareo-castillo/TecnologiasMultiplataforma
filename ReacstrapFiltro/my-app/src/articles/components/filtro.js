import React, {Component} from 'react';
import {        
    Button,    
    Input,
    FormGroup
  } from 'reactstrap';
  
export default class Filtro extends Component{
   
    render(){
        return(
        <div>        
        <FormGroup className="d-flex justify-content-end">
        <Input type="text" onChange={this.props.onchangefiltro.bind(this)} name="filtro" id="filtro" placeholder="filtro" value={this.props.filtro} />
        <Button color="primary" onClick={this.props.buscarclick.bind(this)}>Buscar</Button>
        </FormGroup>
        </div>        
        ); 
    }   
}
