import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon, Segment } from 'semantic-ui-react';

export default function BoardgameCard({ name, image, id, handleAddFav }){

    return (
        <Card>
            <Card.Header as='h2'>
            <Link to={`/boardgames/${id}`}>{name}</Link>
            </Card.Header>
            <Image.Group >
                <Image src={image} wrapped ui={false} height='125vh'/>
            </Image.Group>
            <Button icon animated='vertical' onClick={() => handleAddFav(id)}>
                <Button.Content hidden>Add to Favorites</Button.Content>
                <Button.Content visible>
                    <Icon name='star' />
                </Button.Content>
            </Button>
        </Card>
    )
}