import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { ShipInfo } from '../../../../service/models'


interface CardProps{
    item:ShipInfo
    setVisibility:(item?:ShipInfo)=> void
}

const CardView:React.FC<CardProps> = (props) => {
  return (
    <>
    <Card style={{ width: '100%' }}>
                      <Card.Img alt='ship' style={{ height: "400px" }} variant="top" src={props.item.image} />
                      <Card.Body>
                        <Card.Title style={{ fontSize: "30px" }}>{props.item.name}</Card.Title>
                        <Card.Text style={{ textAlign: "justify", margin: "10px 0" }}>
                          <h6><span>ID - </span>{props.item.id}</h6>
                          <h6><span>TYPE - </span>{props.item.type}</h6>
                          <h6><span>WEIGHT - </span>{props.item.weight === null ? "No Info" : props.item.weight + ` KG`}</h6>
                        </Card.Text>
                        <br />
                        <Button onClick={() => props.setVisibility(props.item)} variant="secondary">Show More Info</Button>
                      </Card.Body>
                    </Card>
    </>
  )
}

export default CardView