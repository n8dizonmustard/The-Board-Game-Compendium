// import { RDS } from 'aws-sdk';
// import { set } from 'mongoose';
import { Card, Image } from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';
import BoardgameCard from '../BoardgameCard/BoardgameCard';

export default function BoardgameList({ atlasApiUrl, bgData, handleFavorite, user, userFavorites, isProfile, boardgame }){

    const [boardgames, setBoardgames] = useState([])

    // console.log('USER FAVS', userFavorites)
    // console.log('TYPE TEST:', typeof(userFavorites))
    // console.log(boardgames)

    useEffect(() => {
        if(bgData === undefined || boardgames.length === 0){
            fetch(atlasApiUrl)
            .then((res) => res.json())
            .then((data) => {
                setBoardgames(data.games)
            })
        }
    }, [])


    let favIds = userFavorites.map(game => game.id)
    // console.log('Game IDs in userFavorites:', favIds)

    return (
        <>
        {boardgames.length < 1 ? // ARE GAMES LOADING?
            <>
            <h1>LOADING BOARD GAMES...</h1>
            <Image size='small' src='https://icon-library.com/images/hammer-icon-png/hammer-icon-png-18.jpg' />
            </>

        :

            <Card.Group itemsPerRow={5} stackable>
                {boardgames.map(boardgame => 
                    <BoardgameCard
                        name={boardgame.name}
                        image={boardgame.image_url}
                        id={boardgame.id}
                        key={`${boardgame.name}`}
                        handleFavorite={handleFavorite}
                        user={user}
                        userFavorites={userFavorites}
                        isProfile={isProfile}
                        boardgame={boardgame}
                    />)}
            </Card.Group>
        }
        </>
    )

}