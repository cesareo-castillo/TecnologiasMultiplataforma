import React from 'react';
import {
    Col
  } from 'reactstrap';

  export default function LateralContent(props){
    return(
        <Col xs="12" md="3">
            {props.children}        
        </Col>
    );
}
