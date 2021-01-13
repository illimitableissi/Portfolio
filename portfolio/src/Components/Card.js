import React from 'react';
import Card from 'react-bootstrap/Card'

const Card = (props) => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img src={props.src} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
            <a href={props.link}>See the code</a>
        </Card>
            
        </div>
    );
};

export default Card;