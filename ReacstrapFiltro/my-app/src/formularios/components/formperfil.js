import React, {Component} from 'react';
import {    
    Container,
    Button,
    FormGroup,
    Label,
    Input    
  } from 'reactstrap';

  export default class FormPerfil extends Component {
      constructor(props)
      {
          super(props);
          this.state = {            
            correo:'',
            nombre:''
        };
      }

    onChangeCorreo(e){        
        this.setState({
            correo: e.target.value
        });
    }
    onChangeNombre(e){        
        this.setState({
            nombre: e.target.value
        });
    }

    save(event){
        //perfil      
        localStorage.setItem('perfil',JSON.stringify({
            nombre: this.state.nombre,
            correo: this.state.correo
        }));
    }

    componentDidMount(){
        const storage = localStorage.getItem('perfil');
        if(storage)
        {   
            console.log(storage);
            var perfil = JSON.parse(storage);
            this.setState({
                correo: perfil.correo,
                nombre: perfil.nombre
            });
        }
    }

      render(){
          return(
              <Container>
                  <br/>
                  <br/>
                  <FormGroup>
                      <Label>Nombre</Label>
                      <Input type="text" onChange={this.onChangeNombre.bind(this)} name="nombreUsuario" 
                      id="nombreUsuario" placeholder="Tu Nombre"
                      value={this.state.nombre}/>
                  </FormGroup>
                  <FormGroup>
                      <Label>Correo</Label>
                      <Input type="text" onChange={this.onChangeCorreo.bind(this)} name="correoUsuario" 
                      id="correoUsuario" placeholder="Tu Correo"
                      value={this.state.correo}/>
                  </FormGroup>
                  <FormGroup>
                      <Button onClick={this.save.bind(this)}>Guardar Perfil</Button>
                  </FormGroup>
              </Container>    
          );
      }
  }