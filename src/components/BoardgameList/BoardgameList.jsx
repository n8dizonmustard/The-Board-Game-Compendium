// import { RDS } from 'aws-sdk';
// import { set } from 'mongoose';
import { Card, Image } from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';
import BoardgameCard from '../BoardgameCard/BoardgameCard';

export default function BoardgameList({ atlasApiUrl, bgData, handleFavorite, user, userFavorites, isProfile, boardgame }){

    const [boardgames, setBoardgames] = useState([])

    console.log('USER FAVS', userFavorites)
    // console.log('TYPE TEST:', typeof(userFavorites))
    // console.log(boardgames)

    useEffect(() => {
        fetch(atlasApiUrl)
        .then((res) => res.json())
        .then((data) => {
            setBoardgames(data.games)
            // console.log(data.games)
        })
    }, [])



    return (
        <>
        {// PART 1
        boardgames.length < 1 && userFavorites.length < 1 ? // ARE GAMES LOADING?
            <>
            <h1>LOADING BOARD GAMES...</h1>
            <Image size='small' src='https://icon-library.com/images/hammer-icon-png/hammer-icon-png-18.jpg' />
            </>

        :
            // PART 2
            isProfile ?
            <Card.Group itemsPerRow={3} stackable>
                {userFavorites.map(boardgame => 
                    <BoardgameCard
                        name={boardgame.name}
                        image={boardgame.image_url}
                        id={boardgame.id}
                        key={`${boardgame.name}`}
                        handleFavorite={handleFavorite}
                        user={user}
                        userFavorites={userFavorites}
                        boardgame={boardgame}
                    />)
                }
            </Card.Group>

        :
            // PART 3
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
                    boardgame={boardgame}
                />)
            }
            </Card.Group>
        }
        </>
    )

}