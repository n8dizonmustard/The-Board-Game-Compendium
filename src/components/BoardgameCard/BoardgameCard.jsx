import React from 'react';
import './BoardgameCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon, Segment } from 'semantic-ui-react';

export default function BoardgameCard({ boardgame, name, image, id, handleFavorite, userFavorites }){

    let favTitles = userFavorites.map(game => game.name)
    let favColor = favTitles.find(game => game === name) ? 'yellow' : 'black'
    let buttonText = favTitles.find(game => game === name) ? 'Remove from Favorites' : 'Add to Favorites'

    let boardgameX = {
        name: boardgame.name,
        image_url: boardgame.image_url
    }

    return (
        <Card className='card-container'>
            <Card.Header as='h2' className='card-item' id='card-header'>
                {/* <Link to={`/boardgames/${id}`} id='game-name'><div className='title'>{name}</div> */}
                <Link to={`/boardgames/${id}`} id='game-name'>
                    <Image.Group  className='card-item' id='card-image'>
                        <Image src={image} wrapped ui={false} height='125vh' id='image'/>
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
                    {name}
                </Button.Content>
            </Button>
        </Card>
    )
}