import React from 'react';
import './BoardgameCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

export default function BoardgameCard({ name, image, id, handleFavorite }){

    return (
        <Card>
            <Card.Header as='h2'>
                <Link to={`/boardgames/${id}`}>{name}
                    <Image.Group >
                        <Image src={image} wrapped ui={false} height='125vh'/>
                    </Image.Group>
                </Link>
            </Card.Header>
            <Button className='favorite' icon animated='vertical' onClick={() => handleFavorite(id)}>
                <Button.Content hidden>Add to Favorites</Button.Content>
                <Button.Content visible>
                    <Icon name='star' />
                </Button.Content>
            </Button>
        </Card>
    )
}