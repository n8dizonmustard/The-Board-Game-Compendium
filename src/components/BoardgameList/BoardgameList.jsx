import { RDS } from 'aws-sdk';
import { set } from 'mongoose';
import React, {useState, useEffect} from 'react';
import { Card } from 'semantic-ui-react';
import BoardgameCard from '../BoardgameCard/BoardgameCard';

export default function BoardgameList({ atlasApiUrl, bgData, handleAddFav }){

    const [boardgames, setBoardgames] = useState([])

    useEffect(() => {
        if(bgData === undefined){
            fetch(atlasApiUrl)
            .then((res) => res.json())
            .then((data) => {
                setBoardgames(data.games)
            })
        }
    }, [])

    let cards = boardgames.map(boardgame => {
        return (
            <BoardgameCard
                name={boardgame.name}
                image={boardgame.image_url}
                description={boardgame.description_preview}
                minPlayers={boardgame.min_players}
                maxPlayers={boardgame.max_players}
                minPlaytime={boardgame.min_playtime}
                maxPlaytime={boardgame.max_playtime}
                minAge={boardgame.min_age}
                publishers={boardgame.primary_publisher.name}
                release={boardgame.year_published}
                rating={boardgame.average_user_rating}
                id={boardgame.id}
                key={`${boardgame.name}`}
                handleAddFav={handleAddFav}
            />
        )
    })

    console.log(cards, 'THESE ARE THE CARDS')

    return(
        <h3>{boardgames ? cards : 'Loading...'}</h3>
    )





    

    // return (
    //     <Card.Group itemsPerRow={4} stackable>
    //         {bgData.map(boardgame => {
    //         return (
    //             <BoardgameCard
    //                 name={boardgame.name}
    // //                 image={boardgame.image_url}
    // //                 description={boardgame.description_preview}
    // //                 minPlayers={boardgame.min_players}
    // //                 maxPlayers={boardgame.max_players}
    // //                 minPlaytime={boardgame.min_playtime}
    // //                 maxPlaytime={boardgame.max_playtime}
    // //                 minAge={boardgame.min_age}
    // //                 publishers={boardgame.primary_publisher.name}
    // //                 release={boardgame.year_published}
    // //                 rating={boardgame.average_user_rating}
    // //                 id={boardgame.id}
    // //                 key={`${boardgame.name}`}
    // //                 handleAddFav={handleAddFav}
    //             />
    //         )
    //     })}
    //     </Card.Group>
    // )

}