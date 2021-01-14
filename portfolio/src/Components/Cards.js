import React from 'react';
import Card from 'react-bootstrap/Card'

const Cards = (props) => {
    return (
        <div>
            <Card className="bg-dark text-white projects__card">
                <Card.Img src={props.source} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.message}</Card.Text>
                    <Card.Text>{props.tech}</Card.Text>
            </Card.ImgOverlay>
            <Card.Link href={props.link}>Site</Card.Link>
            <Card.Link href={props.github}>See the code</Card.Link>
        </Card>
            
        </div>
    );
};

export default Cards;