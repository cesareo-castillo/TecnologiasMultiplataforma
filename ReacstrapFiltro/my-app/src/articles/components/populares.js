import React from 'react';
import Articulo from './articulo.js';

export default function Populares(props){    
    if(props.articulos.length > 0)
    {        
        return(
            <div>
            <h4><small>Artículos mas populares</small></h4>            
            {
                props.articulos.map((item)=>{
                    return <Articulo key={item.id} {...item}></Articulo>;
                })
            }
            </div>        
        );
    }
    else{
        return <p className="text-center">Cargando los mas populares...</p>;
    }
}
