// import { RDS } from 'aws-sdk';
// import { set } from 'mongoose';
import { Card, Image } from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';
import BoardgameCard from '../BoardgameCard/BoardgameCard';
import './BoardgameList.css';

export default function BoardgameList({ atlasApiUrl, bgData, handleFavorite, user, userFavorites, isProfile }){

    const [boardgames, setBoardgames] = useState([])

    // console.log('USER FAVS', userFavorites)
    // console.log('TYPE TEST:', typeof(userFavorites))
    // console.log('BG DATA:', bgData)

    useEffect(() => {
        fetch(atlasApiUrl)
        .then((res) => res.json())
        .then((data) => {
            setBoardgames(data.games)
            // console.log(data.games)
        })
    }, [])

    return (
        <>{

        // PART 1: if userFavs are empty, render loading
        userFavorites.length < 1 && isProfile ?
        // userFavorites.length < 1 && boardgames.length < 1 ?
            <>
            <h3>You have no board games saved to your Favorites.</h3>
            </>

        :
        // PART 2: if userFavs are NOT empty, check if page isProfile
        //      if isProfile == true, render userFavs
        isProfile ?
        <Card.Group itemsPerRow={5} stackable>
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
        // PART 3: if page isProfile == false, check if boardgames is empty
        boardgames.length < 1 ?
            <>
            <h1>LOADING BOARD GAMES...</h1>
            </>

        :
        // PART 4: if boardgames is NOT empty, render boardgames
        <Card.Group itemsPerRow={6} stackable>
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
        }</>
    )

}