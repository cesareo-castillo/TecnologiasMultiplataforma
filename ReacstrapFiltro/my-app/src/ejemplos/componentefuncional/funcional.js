import React from 'react';
import {   
    Button
  } from 'reactstrap';
function ComponenteFuncional(props){
    return(
        <div>
            <h1>{props.Nombre}</h1>        
            <p>
            <Button
            tag="a"
            color="success"
            size="large"
            href="http://reactstrap.github.io"
            target="_blank"
            >
            View Reactstrap Docs
            </Button>
        </p>
        </div>
    );
}

export default ComponenteFuncional;