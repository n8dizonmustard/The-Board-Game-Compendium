import React from 'react';
import './BoardgameCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon, Segment } from 'semantic-ui-react';

export default function BoardgameCard({ boardgame, name, image, id, handleFavorite, userFavorites }){

    let favIds = userFavorites.map(game => game.id)
    let favColor = favIds.find(game => game === id) ? 'yellow' : ''
    let starColor = favIds.find(game => game === id) ? 'black' : ''
    let buttonText = favIds.find(game => game === id) ? 'Remove from Favorites' : 'Add to Favorites'

    let boardgameX = {
        name: boardgame.name,
        id: boardgame.id,
        image_url: boardgame.image_url
    }

    return (
        <Card className='card-container'>
            <Card.Header as='h2' className='card-item' id='card-header'>
                <Link to={`/boardgames/${id}`} id='game-name'>{name}
                    <Image.Group  className='card-item' id='card-image'>
                        <Image src={image} wrapped ui={false} height='125vh'/>
                    </Image.Group>
                </Link>
            </Card.Header>
            
            <Button
                icon animated='vertical'
                onClick={() => handleFavorite(boardgameX)}
                color={favColor}
                className='card-item'
                id='card-button'
            >
                <Button.Content hidden>{buttonText}</Button.Content>
                <Button.Content visible>
                    <Icon name='star' color={starColor}/>
                </Button.Content>
            </Button>
        </Card>
    )
}