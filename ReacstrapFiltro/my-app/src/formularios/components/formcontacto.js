import React, {Component} from 'react';
import {    
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Jumbotron
  } from 'reactstrap';
  
class FormContacto extends Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            correo:'',
            mensaje:''
        };
    }

    onChangeCorreo(e){        
        this.setState({
            correo: e.target.value
        });
    }
    onChangeMensaje(e){        
        this.setState({
            mensaje: e.target.value
        });
    }
    myOnClick(e){
        console.log('myOnClick');
        if(this.props.enviarFormulario(e,this.state.correo,this.state.mensaje))        
            this.setState({mensaje: ''});        
    }
    render(){
        return(
            <Container>
                {/*Comentarios: <h2>Hello World!</h2>*/}
                <Jumbotron>
                    <h1 className="display-3">Dejanos tu mensaje</h1>
                    <p className="lead">No lo dudes!! Dejanos tu mensaje</p> 
                </Jumbotron>
                <Form>
                    <FormGroup>
                        <Label>Correo Electrónico</Label>
                        <Input type="email" onChange={this.onChangeCorreo.bind(this)} name="email" id="email" placeholder="tucorreo@dominio.com" value={this.state.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Mensaje</Label>
                        <Input type="textarea" onChange={this.onChangeMensaje.bind(this)} name="mensaje" id="mensaje" placeholder="Tu mensaje" value={this.state.mensaje}/>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-end">
                        {/*<Button color="primary" onClick={(e)=>{this.props.enviarFormulario(e,this.state.correo,this.state.mensaje);}}>Enviar Mensaje</Button>*/}
                        <Button color="primary" onClick={this.myOnClick.bind(this)}>Enviar Mensaje</Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default FormContacto;