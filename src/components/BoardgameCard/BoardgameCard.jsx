import React from 'react';
import './BoardgameCard.css';
import { Link } from 'react-router-dom';
import { Card, Image, Button, Icon } from 'semantic-ui-react';

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
    let starColor = favIds.find(game => game === id) ? 'black' : 'yellow'
    let buttonText = favIds.find(game => game === id) ? 'Remove from Favorites' : 'Add to Favorites'


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
                color={favColor}
            >
                <Button.Content hidden>{buttonText}</Button.Content>
                <Button.Content visible>
                    <Icon name='star' color={starColor}/>
                </Button.Content>
            </Button>
        </Card>
    )
}