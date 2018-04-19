import React from 'react';
// eslint-disable-next-line 
import arduino from '../../assets/arduinonano.jpg';

export default function Articulo(props){    
    const imagen = require('../../assets/'+props.imagen);
    return(
        <div key={props.id}>
            <hr/>
            <h2>
                {props.nombre}
            </h2>
            <h6>
            {
                 props.tags.map((item)=>{                     
                     if(item.indexOf('C++')!==-1)
                        return <span className="badge badge-primary" key={props.id.toString()+item}>{item}</span>;
                    else
                        return <span className="badge badge-warning" key={props.id.toString()+item}>{item}</span>;
                })
            }
            </h6>            
            {/*<img src={'http://localhost:3001/assets/'+props.imagen} alt=''></img>*/}
            <img src={imagen} alt=''></img>
            <p>
                {props.descripcion}
            </p>
        </div>        
    );
}