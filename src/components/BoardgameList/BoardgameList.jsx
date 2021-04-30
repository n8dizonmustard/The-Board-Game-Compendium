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


    // console.log(boardgames, 'THESE ARE THE BG STATE')

    return (
        <>
        {boardgames.length < 1 ? // ARE GAMES LOADING?
            <>
            <h1>LOADING BOARD GAMES...</h1>
            <Image size='small' src='https://icon-library.com/images/hammer-icon-png/hammer-icon-png-18.jpg' />
            </>

            // : isProfile ? // IF GAMES NOT LOADING, IS BG LIST ON PROFILE PAGE?


// CURRENT CODE: for every bg in boardgames array, return new array as BG Card
// NEW CODE: for every bg in boardgames array,
//  1) verify bg id matches an id in userFavs 
//  2) if true, render that bg as BG Card

        :
        //     <Card.Group itemsPerRow={4} stackable>
        //         { 



        //             <BoardgameCard
        //                 boardgame={boardgame}
        //                 name={boardgame.name}
        //                 image={boardgame.image_url}
        //                 id={boardgame.id}
        //                 key={`${boardgame.name}`}
        //                 handleFavorite={handleFavorite}
        //                 user={user}
        //                 userFavorites={userFavorites}
        //                 isProfile={isProfile}
        //             />
        //         }
        //    </Card.Group>

        //     : // IF BG LIST IS NOT ON PROFILE PAGE RENDER THIS...

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
                        boardgame={boardgame}
                    />)}
            </Card.Group>
        }
        </>
    )

}