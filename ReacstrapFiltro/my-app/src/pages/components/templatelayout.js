import React from 'react';
import {
    Container,
    Row
  } from 'reactstrap';

function TemplateLayout(props){
    return(
        <Container fluid color="primary">
        <Row>
            {props.children}
        </Row>
        </Container>
    );
}
export default TemplateLayout;