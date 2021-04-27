import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';

export default function BoardgameCard({ name, image, id }){

    return (
        <Card>
            <Card.Header as='h2'>
            <Link to={`/boardgames/${id}`}>{name}</Link>
            </Card.Header>
            <Image.Group >
                <Image src={image} wrapped ui={false} height='125vh'/>
            </Image.Group>
            <Button
                fluid size='large'
                type="submit"
                className="btn"
            >
                Add to Favorites
            </Button>
        </Card>
    )
}