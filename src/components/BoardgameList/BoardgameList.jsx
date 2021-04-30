// import { RDS } from 'aws-sdk';
// import { set } from 'mongoose';
import { Card, Image } from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';
import BoardgameCard from '../BoardgameCard/BoardgameCard';

export default function BoardgameList({ atlasApiUrl, bgData, handleFavorite, user, userFavorites, isProfile }){

    const [boardgames, setBoardgames] = useState([])

    // console.log('USER FAVS', userFavorites)
    // console.log('TYPE TEST:', typeof(userFavorites))
    console.log(boardgames)

    useEffect(() => {
        if(bgData === undefined || boardgames.length === 0){
            fetch(atlasApiUrl)
            .then((res) => res.json())
            .then((data) => {
                setBoardgames(data.games)
            })
        }
    }, [])


    // console.log(boardgames, 'THESE ARE THE BG STATE')

    return (
        <>


            <Card.Group itemsPerRow={4} stackable>
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
                    />)}
            </Card.Group>

        </>
    )

}