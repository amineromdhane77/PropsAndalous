import React from 'react'
import desti from '../data/Destination';
import Spain from './Spain';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export const Romdhane = () => {
  return (
    <div>
        <Container>
            <Row>
                {desti.map(({link,place,description})=>
                <Col>
                <Spain
                link={link}
                place={place}
                description={description}
                />
                </Col>
                 )}
            </Row>
           
        </Container>
    </div>
  )
}
export default Romdhane;
