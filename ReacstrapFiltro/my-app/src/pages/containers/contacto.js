import React, {Component} from 'react';
import TemplateLayout from '../components/templatelayout.js';
import MainContent from '../components/maincontent.js';
import LateralContent from '../components/lateralcontent.js';
import Sidebar from '../../navegacion/sidebar.js';
import FormContacto from '../../formularios/components/formcontacto.js';
import SERVICE from '../../constantes.js';
class Contacto extends Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
        this.state = {
            key: 0
        };
    }

    guardarComentario = (e, correo, mensaje)=>{
        // console.log(correo);
        // console.log(mensaje);
        //fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/comentario',{
        fetch(SERVICE.CONTROLLER_SITIO_COMENTARIO,{
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id: 0,
                correo: correo,
                mensaje: mensaje
            })    
        });
        alert('El mensaje ha sido enviado!');       
        //this.setState({key: Math.random()});
        return true;
    }
    render(){
        return(
            <TemplateLayout>
                {/*Comentarios: <h2>Hello World!</h2>*/}
                <LateralContent>
                    <Sidebar pagina="contacto" />
                </LateralContent>            
                <MainContent>
                    {/*<p>Contacto</p>*/}
                    <FormContacto key={this.state.key} enviarFormulario={this.guardarComentario}/>
                </MainContent>    
            </TemplateLayout>
        );
    }

}

export default Contacto;