import React from 'react';
import './BoardgameCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon, Segment } from 'semantic-ui-react';

export default function BoardgameCard({ boardgame, name, image, id, handleFavorite, user, userFavorites }){

    // console.log('USER FAVS IN BG CARD', userFavorites)
    // console.log('boardgame:', id) // returns every bg object
    
    let favIds = userFavorites.map(game => game.id)
    // console.log('ids in userfavs:', favIds) // returns ids of every bg in userFavs

    // for(let i=0; i<favIds.length; i++){
    //     if(favIds[i] === id) {
    //         console.log(`${favIds[i]} matches ${name}, ${id}`)
    //     } else {
    //         console.log(`${favIds[i]} does not match ${name}, ${id}`)
    //     }
    // }

    let favColor = favIds.find(game => game === id) ? 'yellow' : ''
    let starColor = favIds.find(game => game === id) ? 'black' : ''
    let buttonText = favIds.find(game => game === id) ? 'Remove from Favorites' : 'Add to Favorites'


    return (
        <Card className='card-container'>
            <Card.Header as='h2' className='card-item' id='card-header'>
                <Link to={`/boardgames/${id}`}>{name}
                    <Image.Group  className='card-item' id='card-image'>
                        <Image src={image} wrapped ui={false} height='125vh'/>
                    </Image.Group>
                </Link>
            </Card.Header>
            
            <Button
                icon animated='vertical'
                onClick={() => handleFavorite(boardgame)}
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