import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Spain = (amine) => {
    const link=amine.link;
    const place=amine.place;
    const description=amine.description;
  return (
   
    <div style={{backgroundColor:"#8A170C"}}>

<Card style={{ width: '60rem',backgroundColor: "#FF7A33"  }}>
      <Card.Img variant="top" src={link} />
      <Card.Body>
        <Card.Title>{place}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <a href="https://www.andalucia.org/en/home" target="_blank">
        <Button >Go Andalusia</Button>
        </a>
      </Card.Body>
    </Card>
    </div>
   
  )
}
export default Spain;