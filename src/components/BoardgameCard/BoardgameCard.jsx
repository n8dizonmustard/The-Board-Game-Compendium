import React from 'react';
import './BoardgameCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

export default function BoardgameCard({ boardgame, name, image, id, handleFavorite, user, userFavorites }){


    // console.log(userFavorites.length, '<-# of games in favs')
    
    // console.log(userFavorites, 'USER FAVS')
    
    const yellow = {
        backgroundColor: 'yellow'
    }
    const blue = {
        backgroundColor: 'blue'
    }
    
    const favColor = userFavorites.includes(id) ? yellow : blue;

    return (
        <Card>
            <Card.Header as='h2'>
                <Link to={`/boardgames/${id}`}>{name}
                    <Image.Group >
                        <Image src={image} wrapped ui={false} height='125vh'/>
                    </Image.Group>
                </Link>
            </Card.Header>
            <Button
                className='favorite'
                icon animated='vertical'
                onClick={() => handleFavorite(boardgame)}
                style={favColor}
            >
                <Button.Content hidden>Add to Favorites</Button.Content>
                <Button.Content visible>
                    <Icon name='star' color='white'/>
                </Button.Content>
            </Button>
        </Card>
    )
}